import * as types from '../constants/ActionTypes';
import * as global from '../constants/Global'


const url =global.URL+"api/Aircrafts";

const headers = new Headers();
const method = "GET"
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

const options = {
  method,
  headers
};

const getAllAircraftsRequest = () => {
  return {
    type: types.GET_All_AIRCRAFTS_REQUEST
  };
}

const getAllAircraftsReceive = (json) => {
  return {
    type: types.GET_All_AIRCRAFTS_RECEIVE,
    gets: json,
    receivedAt: Date.now()
  }
}

const fetchGetAllAircrafts = () => dispatch => {
  dispatch(getAllAircraftsRequest())
  return fetch(url, options)
    .then(response => response.json())
    .then(json => dispatch(getAllAircraftsReceive(json)))
}

function shoudeFetchGetAllAircrafts(state){
  // return true
  const gets = state.getAllAircrafts.lastUpdated
  if (!gets) {
    return true
  } else if (gets.isFetching) {
    return false
  } else {
    return gets.didInvalidate
  }
}

export const fetchGetAllAircraftsIfNeeded = () => (dispatch, getState) => {
  if (shoudeFetchGetAllAircrafts(getState())) {
    return dispatch(fetchGetAllAircrafts())
  }
}
