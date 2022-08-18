import horseImage from "../images/5.png";

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
      <img src={horseImage} alt={"shit happened"} width={width * 0.8}></img>
    </div>
  );
};
