export const getYear = (datePoint: string): string => {
  const date = new Date(datePoint);
  const year = date.getFullYear();

  return `${year}`;
};
