import hexRgb from "hex-rgb";

export const toKebabCase = (value: string) => {
  return value.replace(
    /[A-Z]+(?=[a-z0-9])|\d+/g,
    (match) => `-${match.toLowerCase()}`
  );
};

export const toCSSPropertyPath = (key: string, path: string[] = []) => {
  return [...path, key]
    .filter((key) => key !== "DEFAULT")
    .map(toKebabCase)
    .join("-");
};

export const toCSSVariableName = (name: string) => {
  return `--${name}`;
};

export const toCSSVariable = (name: string) => {
  return `var(${toCSSVariableName(name)})`;
};

export const normalizeRem = (rem: string, htmlFontSize: number) => {
  const px = parseFloat(rem) * 16;
  return `${px / htmlFontSize}rem`;
};

export const hexToRgb = (hex: string) => {
  return hexRgb(hex);
};

export const pxToRem = (pxValue: number, htmlFontSize: number) => {
  const remValue = pxValue / htmlFontSize;
  return `${remValue}rem`;
};
