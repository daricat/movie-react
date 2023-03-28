type TOnSearch = (searchQuery: string) => void;

export interface ISearchMovieProps {
  initialSearchQuery?: string;
  onSearch: TOnSearch;
}
