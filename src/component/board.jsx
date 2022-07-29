import { Square } from "./square";

const NUMBER_OF_SQUARES_PER_ROW = 8;

const BOARD_CONFIGS = {
  SQUARE_SIZE: 20,
  COLOR_1: "brown",
  COLOR_2: "white",
};

const yAxis = [1, 2, 3, 4, 5, 6, 7, 8];
const xAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];

const determineColor = (yAxisPosition, xAxisPosition) =>
  (yAxisPosition + xAxisPosition) % 2 === 0
    ? BOARD_CONFIGS.COLOR_1
    : BOARD_CONFIGS.COLOR_2;

export const Board = () => {
  const { SQUARE_SIZE, COLOR_1, COLOR_2 } = BOARD_CONFIGS;

  return (
    <div style={{ maxWidth: SQUARE_SIZE * NUMBER_OF_SQUARES_PER_ROW }}>
      {yAxis.map((yAxis) => (
        <div style={{ display: "flex", flexDirection: "row" }}>
          {xAxis.map((xAxis, index) => {
            const color = determineColor(yAxis, index + 1);

            return (
              <Square
                color={color}
                height={20}
                width={20}
                yAxis={yAxis}
                xAxis={xAxis}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};
