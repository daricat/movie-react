import React from 'react';

import { Layout } from 'antd';

import AppRouter from './components/AppRouter';
import Header from './components/Header/Header';

import './index.scss';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <AppRouter />
    </div>
  );
}

export default App;
