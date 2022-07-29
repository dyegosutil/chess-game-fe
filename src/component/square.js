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
    ></div>
  );
};
