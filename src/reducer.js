import './action';

// Reducer
const initialState = {
  data: '',
  loading: false,
  error: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUESTED_DOG':
      return {
        data: '',
        loading: true,
        error: false,
      };
    case 'REQUESTED_DOG_SUCCEEDED':
      return {
        data: action,
        loading: false,
        error: false,
      };
    case 'REQUESTED_DOG_FAILED':
      return {
        data: '',
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};
