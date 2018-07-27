import * as types from '../constants/ActionTypes';
import * as global from '../constants/Global'


const url =global.URL+"api/search";

const headers = new Headers();
const method = "GET"
headers.append("Content-Type", "application/json");
headers.append("Accept", "application/json");

const options = {
  method,
  headers
};

export const searchTicketRequest = () => {
  return {
    type: types.GET_All_SEARCH_TICKET_REQUEST
  };
}

export const searchTicketReceive = (json) => {
  return {
    type: types.GET_All_SEARCH_TICKET_RECEIVE,
    gets: json,
    receivedAt: Date.now()
  }
}

export const fetchSearchTicket = (data) => dispatch => {
  console.log('data',data)
  dispatch(searchTicketRequest())
  return fetch(url +'?originCityId='+data.originCityId +'&destinationCityId='+ data.destinationCityId +'&airlineId='+ data.airlineId+'&passengers='+ data.passengers, options)
    .then(response => response.json())
    .then(json => dispatch(searchTicketReceive(json)))
}


