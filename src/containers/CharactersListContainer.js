import { connect } from 'react-redux';
import CharactersList from '../components/CharactersList';
import { requestDog, requestDogSuccess, requestDogError, fetchDog} from '../action';

const mapDispatchToProps = (dispatch) => ({
  requestDog: () => dispatch(requestDog()),
  requestDogSuccess: (data) => dispatch(requestDogSuccess(data)),
  requestDogError: () => dispatch(requestDogError()),
  fetchDog: () => dispatch(fetchDog()),
});

const mapStateToProps = (state) => {
  console.log("state", state);
  return { data: state.data };
};

const CharactersListContainer = connect(
  mapStateToProps,
  mapDispatchToProps)(CharactersList);

export default CharactersListContainer;