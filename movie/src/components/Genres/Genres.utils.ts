import { MenuProps } from 'antd';
import { ItemType } from 'antd/es/menu/hooks/useItems';

import defaultGenres from './Genres.const';

const transformGenresForMenu = (
  genres: string[] = defaultGenres
): MenuProps['items'] => {
  const transformedGenres = genres.map(
    (genre): ItemType => ({
      label: genre,
      key: genre.toLowerCase()
    })
  );

  return transformedGenres;
};

export default transformGenresForMenu;
