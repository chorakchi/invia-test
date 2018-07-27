import * as types from '../constants/ActionTypes';
import * as global from '../constants/Global'


const url =global.URL+"api/airlines";

const headers = new Headers();
const method = "GET"
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

const options = {
  method,
  headers
};

export const getAllAirlinesRequest = () => {
  return {
    type: types.GET_All_AIRLINES_REQUEST
  };
}

export const getAllAirlinesReceive = (json) => {
  return {
    type: types.GET_All_AIRLINES_RECEIVE,
    gets: json,
    receivedAt: Date.now()
  }
}

const fetchGetAllAirlines = () => dispatch => {
  dispatch(getAllAirlinesRequest())
  return fetch(url, options)
    .then(response => response.json())
    .then(json => dispatch(getAllAirlinesReceive(json)))
}

function shoudeFetchGetAllAirlines(state){
  // return true
  const gets = state.getAllAirlines.lastUpdated
  if (!gets) {
    return true
  } else if (gets.isFetching) {
    return false
  } else {
    return gets.didInvalidate
  }
}

export const fetchGetAllAirlinesIfNeeded = () => (dispatch, getState) => {
  if (shoudeFetchGetAllAirlines(getState())) {
    return dispatch(fetchGetAllAirlines())
  }
}
