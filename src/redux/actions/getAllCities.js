import * as types from '../constants/ActionTypes';
import * as global from '../constants/Global'


const url =global.URL+"api/cities";

const headers = new Headers();
const method = "GET"
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

const options = {
  method,
  headers
};

export const getAllCitiesRequest = () => {
  return {
    type: types.GET_All_CITIES_REQUEST
  };
}

export const getAllCitiesReceive = (json) => {
  return {
    type: types.GET_All_CITIES_RECEIVE,
    gets: json,
    receivedAt: Date.now()
  }
}

const fetchGetAllCities = () => dispatch => {
  dispatch(getAllCitiesRequest())
  return fetch(url, options)
    .then(response => response.json())
    .then(json => dispatch(getAllCitiesReceive(json)))
}

function shoudeFetchGetAllCities(state){
  // return true
  const gets = state.getAllCities.lastUpdated
  if (!gets) {
    return true
  } else if (gets.isFetching) {
    return false
  } else {
    return gets.didInvalidate
  }
}

export const fetchGetAllCitiesIfNeeded = () => (dispatch, getState) => {
  if (shoudeFetchGetAllCities(getState())) {
    return dispatch(fetchGetAllCities())
  }
}
