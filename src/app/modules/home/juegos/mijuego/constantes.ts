const PURPLE_BRICK_IMAGE = "../../../../../assets/mi_juego/brick-purple.png";
const GREEN_BRICK_IMAGE = "../../../../../assets/mi_juego/brick-green.png";
const RED_BRICK_IMAGE = "../../../../../assets/mi_juego/brick-red.png";
const YELLOW_BRICK_IMAGE = "../../../../../assets/mi_juego/brick-yellow.png";
const BLUE_BRICK_IMAGE = "../../../../../assets/mi_juego/brick-blue.png";
export const PELOTA_IMAGE = "../../../../../assets/mi_juego/ball.png";
export const PALETA_IMAGE = "../../../../../assets/mi_juego/paddle.png";

const canvas: HTMLCanvasElement | null = document.querySelector('#canvas');

export const STAGE_PADDING = 10;
export const STAGE_ROWS = 20;
export const STAGE_COLS = 11; // 10
export const BRICK_PADDING = 5;
export const BRICK_WIDTH = canvas
  ? Math.floor((canvas.width - STAGE_PADDING * 2) / STAGE_COLS) - BRICK_PADDING
  : 92;
export const BRICK_HEIGHT = canvas
  ? Math.floor((canvas.height - STAGE_PADDING * 2) / STAGE_ROWS) - BRICK_PADDING
  : 30;
export const PADDLE_WIDTH = 150;
export const PADDLE_HEIGHT = 25;
export const PADDLE_STARTX = 450;
export const PADDLE_SPEED = 10;
export const BALL_SPEED = 5;
export const BALL_SIZE = 20;
export const BALL_STARTX = 500;
export const BALL_STARTY = 400;

export const BRICK_IMAGES: { [key: number]: string } = {
  1: RED_BRICK_IMAGE,
  2: GREEN_BRICK_IMAGE,
  3: YELLOW_BRICK_IMAGE,
  4: BLUE_BRICK_IMAGE,
  5: PURPLE_BRICK_IMAGE
};

export const BRICK_ENERGY: { [key: number]: number } = {
  1: 1, // Red brick
  2: 1, // Green brick
  3: 2, // Yellow brick
  4: 2, // Blue brick
  5: 3 // Purple brick
};


export const LEVEL = [
  4, 0, 4, 3, 3, 3, 4, 0, 0, 4, 0,
  3, 0, 3, 0, 4, 0, 3, 5, 0, 3, 0,
  2, 0, 2, 0, 2, 0, 2, 0, 5, 2, 0,
  1, 5, 1, 0, 5, 0, 1, 0, 0, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0,
];

export type Vector = {
    x: number;
    y: number;
}
