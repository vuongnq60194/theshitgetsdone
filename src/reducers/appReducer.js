//
//App Reducer
//

const initialState = {
  
};

const FETCH_CITIES = 'FETCH_CITIES';

const appReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_CITIES:
      return {
        Cities: action.data
      }
    default: return state;
  }
};

export default appReducer;

export function getCities() {
  return (dispatch) => {
    fetch(dispatch);
  };
}

function fetch(dispatch) {
  firebase.database().ref('/Cities').once('value').then(function (data) {
    dispatch({
      type: FETCH_CITIES,
      data: data.val()
    });
  });
}

export function addCity(city) {
  return (dispatch) => {
    firebase.database().ref('/Cities').push(city);
    fetch(dispatch);
  }
}