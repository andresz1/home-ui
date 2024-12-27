export const isHex = (value: string) => {
  return /^#[0-9a-fA-F]+$/.test(value);
};

export const isRem = (value: string) => {
  return /rem$/gi.test(value);
};
