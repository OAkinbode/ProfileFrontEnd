import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import BodyContent from "./pages/BodyContent";
import Project1 from "./pages/Project1";
import MyResume from "./pages/MyResume";
import Contact from "./pages/Contact";
import TicTacToe from "./pages/TicTacToe";
import GrabAJoke from "./pages/GrabAJoke";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <BodyContent />
              </>
            }
          />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/project1" element={<Project1 />} />
          <Route path="/MyResume" element={<MyResume />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/GrabAJoke" element={<GrabAJoke />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
