import { Content } from 'antd/es/layout/layout';
import React from 'react';

import SearchMovie from '../../components/SearchMovie/SearchMovie';
import Genres from '../../components/Genres/Genres';

import './Main.scss';

export function Main() {
  return (
    <section className="Main">
      <h1 className="main__title">find your movie</h1>

      <SearchMovie />
      <Genres />
    </section>
  );
}

export default Main;
