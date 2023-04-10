const capitalizeFirstLetter = (word: string): string => {
  const firstLetter = word.charAt(0).toUpperCase();
  const restWord = word.slice(1);

  return `${firstLetter}${restWord}`;
};

export const transformGenresForMovieTile = (genres: string[]): string => {
  const SEPARATOR_SYMBOL = ', ';

  const tranformGenres = genres
    .map((genre) => capitalizeFirstLetter(genre))
    .join(SEPARATOR_SYMBOL);

  return tranformGenres;
};
