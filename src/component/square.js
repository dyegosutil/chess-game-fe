import horseImage from "../images/horse_chess.png"

export const Square = ({ color, height, width }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        height: height,
        width: width,
        border: "1px solid black",
        boxSizing: "border-box",
      }}
    >
        <img src="../images/horse_chess.png" alt={"shit happened"}></img>
    </div>
  );
};
