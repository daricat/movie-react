import { useLocation } from 'react-router-dom';

function useGetParameter(paramName: string): string | null {
  const { search } = useLocation();

  const query = new URLSearchParams(search);
  const param = query.get(paramName);

  return param;
}

export default useGetParameter;
