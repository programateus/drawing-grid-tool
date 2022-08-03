const PIXEL_IN_CM = 0.0264583333;

export const cmToMm = (value: number) => value * 10;

export const mmToCm = (value: number) => value / 10;

export const pxToCm = (value: number) => value * PIXEL_IN_CM;

export const cmToPx = (value: number) => value / PIXEL_IN_CM;
