import horseImage from "../images/horse_chess.png";
import kingImage from "../images/king.png";
import { useState, useEffect } from "react";

export const Square = ({ color, height, width, yAxis, xAxis }) => {
  const [hasFigure, setHasFigure] = useState(false);

  useEffect(() => {
    if ((yAxis === 1 || yAxis === 5) && (xAxis === "a" || xAxis === "c")) {
      setHasFigure(true);
    }
  }, [yAxis, xAxis]);

  const onClick = () => {
    if (hasFigure === true) {
      setHasFigure(false);
    } else {
      setHasFigure(true);
    }
  };

  return (
    <button onClick={() => onClick()}>
      <div
        style={{
          backgroundColor: color,
          height: height,
          width: width,
          border: "1px solid black",
          boxSizing: "border-box",

          // to align the figures in the center of the square
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {hasFigure ? (
          <img src={kingImage} alt={"shit happened"} width={width * 0.8}></img>
        ) : null}
      </div>
    </button>
  );
};
