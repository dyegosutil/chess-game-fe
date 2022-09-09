import horseImage from "../images/horse_chess.png";
import kingImage from "../images/king.png";

export const Square = ({ color, height, width }) => {
  return (
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
      <img src={kingImage} alt={"shit happened"} width={width * 0.8}></img>
    </div>
  );
};
