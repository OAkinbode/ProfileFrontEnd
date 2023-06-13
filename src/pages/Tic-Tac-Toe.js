import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Leftpane from "../components/Leftpane";
import "../styles/TicTacToe.css";
import backgroundimage from "../assets/checkerboard-cross.webp";
import Titleblock from "../components/Titleblock";
import MobileView from "../components/MobileView";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";

export default function TicTacToe() {
  const isMobileRedux = useSelector((state) => state.isMobile);

  const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [board, setBoard] = useState(initialBoard);
  const [startGame, setStartGame] = useState(null);
  const [humanPlay, setHumanPlay] = useState({});
  const [compPlay, setCompPlay] = useState({});
  const [compPlayRow, setCompPlayRow] = useState(null);
  const [compPlayCell, setCompPlayCell] = useState(null);
  const [play, setPlay] = useState("");
  const [lastPlay, setLastPlay] = useState("");
  const [playPos, setPlayPos] = useState(0);
  const [winner, setWinner] = useState(0);
  const [winnerName, setWinnerName] = useState("");
  const [showComponent, setShowComponent] = useState(false);
  const [allowNextPlay, setAllowNextPlay] = useState(true);

  useEffect(() => {
    handleHumanPlay(play);
  }, [play]);

  useEffect(() => {
    setTimeout(function () {
      makeComputerPlay();
    }, 50);
  }, [playPos]);

  useEffect(() => {
    mapCompPlay();
    console.log("I got into the lastPlay useffect", lastPlay);
  }, [lastPlay]);

  useEffect(() => {
    handleComputerPlay(compPlayRow, compPlayCell);
    setAllowNextPlay(true);
  }, [compPlayRow, compPlayCell]);

  useEffect(() => {
    lastPlaySettings();
  }, [compPlay]);

  useEffect(() => {
    declareWinner();
  }, [winner]);

  useEffect(() => {
    if (winner === 1 || winner === 2) {
      setShowComponent(true);
    } else {
      setShowComponent(false);
    }
  }, [winnerName]);

  useEffect(() => {
    fetch("https://profileapplication.herokuapp.com/api/startgame/you", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((response) => response.json())
      .then((startGame) => setStartGame(startGame));
  }, []);

  if (!startGame) {
    return <div>Loading...</div>;
  }

  const restartGame = () => {
    window.location.reload();
  };

  function checkWinner(playJson) {
    setWinner(playJson.winner);
  }

  function declareWinner() {
    if (winner != 0) {
      if (winner === 1) {
        setWinnerName("Computer");
      } else if (winner === 2) {
        setWinnerName("You");
      }
    }
  }

  function handleComputerPlay(rowIndex, cellIndex) {
    if (compPlayRow !== null || compPlayCell !== null) {
      const newBoard = [...board];
      newBoard[rowIndex][cellIndex] = "O";
      setBoard(newBoard);
    }
  }

  function makeComputerPlay() {
    if (playPos != 0) {
      async function fetchData() {
        try {
          const response = await axios.post(
            "https://profileapplication.herokuapp.com/api/computer"
          );
          setCompPlay(response.data);
          // findLastPlay(compPlay);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }
  }

  function lastPlaySettings() {
    if (playPos === 2) {
      setLastPlay(compPlay.two);
    } else if (playPos === 4) {
      setLastPlay(compPlay.four);
    } else if (playPos === 6) {
      setLastPlay(compPlay.six);
    } else if (playPos === 8) {
      setLastPlay(compPlay.eight);
    } else if (playPos === 10) {
      setLastPlay(compPlay.ten);
    } else if (playPos === 12) {
      setLastPlay(compPlay.twelve);
    }

    checkWinner(compPlay);
    console.log(compPlay);
  }

  function mapCompPlay() {
    // map computer play to APIPlay
    if (lastPlay.slice(-2) === "00") {
      setCompPlayRow(0);
      setCompPlayCell(0);
    } else if (lastPlay.slice(-2) === "01") {
      setCompPlayRow(0);
      setCompPlayCell(1);
    } else if (lastPlay.slice(-2) == "02") {
      setCompPlayRow(0);
      setCompPlayCell(2);
    } else if (lastPlay.slice(-2) === "10") {
      setCompPlayRow(1);
      setCompPlayCell(0);
    } else if (lastPlay.slice(-2) === "11") {
      setCompPlayRow(1);
      setCompPlayCell(1);
    } else if (lastPlay.slice(-2) === "12") {
      setCompPlayRow(1);
      setCompPlayCell(2);
    } else if (lastPlay.slice(-2) === "20") {
      setCompPlayRow(2);
      setCompPlayCell(0);
    } else if (lastPlay.slice(-2) === "21") {
      setCompPlayRow(2);
      setCompPlayCell(1);
    } else if (lastPlay.slice(-2) === "22") {
      setCompPlayRow(2);
      setCompPlayCell(2);
    }
  }

  const handleCellClick = (rowIndex, cellIndex) => {
    const newBoard = [...board];
    newBoard[rowIndex][cellIndex] = "X";
    setBoard(newBoard);

    //Map play to API Play
    if (rowIndex === 0 && cellIndex === 0) setPlay("0,0");
    else if (rowIndex === 0 && cellIndex === 1) setPlay("0,1");
    else if (rowIndex === 0 && cellIndex === 2) setPlay("0,2");
    else if (rowIndex === 1 && cellIndex === 0) setPlay("1,0");
    else if (rowIndex === 1 && cellIndex === 1) setPlay("1,1");
    else if (rowIndex === 1 && cellIndex === 2) setPlay("1,2");
    else if (rowIndex === 2 && cellIndex === 0) setPlay("2,0");
    else if (rowIndex === 2 && cellIndex === 1) setPlay("2,1");
    else if (rowIndex === 2 && cellIndex === 2) setPlay("2,2");
  };

  async function handleHumanPlay(play) {
    let url = `https://profileapplication.herokuapp.com/api/humanplayer/${play}`;
    if (
      url != "https://profileapplication.herokuapp.com/api/humanplayer/" &&
      allowNextPlay
    ) {
      try {
        const response = await axios.post(url);
        setHumanPlay(response.data);
        setPlayPos(playPos + 2);
        checkWinner(humanPlay);
        setAllowNextPlay(false);
      } catch (error) {
        console.error(error);
      }
    }
  }

  return (
    <div className="flex">
      {!isMobileRedux && <Leftpane />}
      <MobileView />
      <div className="w-screen">
        <Navbar isMobile={isMobileRedux}></Navbar>
        <Titleblock title="TicTacToe" />
        <div
          className="bg-gray-100 h-screen flex items-center justify-center"
          style={{ background: `url(${backgroundimage})` }}
        >
          <div className="w-auto h-auto bg-gray-100 px-2 py-2 shadow-lg border border-gray-200">
            <div className="flex items-center justify-center px-3 py-3">
              <div className="text-center">
                {board.map((row, rowIndex) => (
                  <div className="row flex flex-wrap" key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <button
                        className={` flex flew-wrap border border-gray-300 items-center justify-center bg-gray-50 rounded ${
                          isMobileRedux
                            ? "w-20 h-20 text-2xl"
                            : "w-40 h-40 text-6xl"
                        }`}
                        key={cellIndex}
                        onClick={() => handleCellClick(rowIndex, cellIndex)}
                      >
                        {board[rowIndex][cellIndex]}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center px-6 py-6">
              <p></p>
              <p></p>
              <div className="px-2 py-2">
                <button
                  className="bg-teal-900 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
                  onClick={restartGame}
                >
                  Restart Game
                </button>
              </div>

              <div className="bg-red-900 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-32 flex items-center justify-center">
                <Link to="/Projects">Return </Link>
              </div>
            </div>
            <div>{showComponent && <MyComponent />}</div>
          </div>
        </div>
      </div>
    </div>
  );

  function MyComponent() {
    return (
      <div>
        <h3>The winner is: {winnerName}!</h3>
      </div>
    );
  }
}
