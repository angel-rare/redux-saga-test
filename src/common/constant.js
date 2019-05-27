import CharactersListContainer from '../containers/CharactersListContainer';

const routes = [
  {
    path: '/',
    exact: true,
    component: CharactersListContainer
  },
  {
    path: '/characters',
    exact: true,
    component: CharactersListContainer
  }
];

export default routes;