// Action Creators
export const requestDog = () => {
  return { type: 'REQUESTED_DOG' }
};

export const requestDogSuccess = (data) => {
  return { type: 'REQUESTED_DOG_SUCCEEDED', data }
};

export const requestDogError = () => {
  return { type: 'REQUESTED_DOG_FAILED' }
};

export const fetchDog = () => {
  console.log("fetchDog");
  return { type: 'FETCHED_DOG' };
};
