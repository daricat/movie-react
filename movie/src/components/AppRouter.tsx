import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { routes } from '../router';

function AppRouter() {
  const childrenRoutes = routes.map((route) => (
    <Route path={route.path} Component={route.component} key={route.path} />
  ));

  return <Routes>{childrenRoutes}</Routes>;
}

export default AppRouter;
