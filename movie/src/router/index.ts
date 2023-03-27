import Auth from '../pages/Auth/Auth';
import Main from '../pages/Main/Main';

export interface IRoute {
  path: string;
  component: React.ComponentType;
  exact?: boolean;
}

export enum ROUTES_NAME {
  MAIN = '/main',
  AUTH = '/auth'
}

export const routes: IRoute[] = [
  {
    path: ROUTES_NAME.MAIN,
    component: Main,
    exact: true
  },
  {
    path: ROUTES_NAME.AUTH,
    component: Auth,
    exact: true
  }
];
