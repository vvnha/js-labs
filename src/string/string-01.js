export const countWords = (str) => {
  if (!str) return 0;

  return str.split(' ').filter((word) => word !== ' ').length;
};
