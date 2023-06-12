import { React, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { mobile, fullScreen } from "../actions";

function MobileView() {
  const isMobileRedux = useSelector((state) => state.isMobile);
  const dispatch = useDispatch();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the width threshold as needed
      if (isMobile) {
        dispatch(mobile());
      } else if (!isMobile) {
        dispatch(fullScreen());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial value based on the window width

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div>
      {/* <h3>Mobile state: {isMobileRedux.toString()}</h3> */}
      {/* <button onClick={() => dispatch(increment())}>Increment button</button>
        <p>counter: {counter}</p> */}
    </div>
  );
}

export default MobileView;
