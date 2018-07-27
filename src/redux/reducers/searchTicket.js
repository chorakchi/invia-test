import * as types from "../constants/ActionTypes";

export const searchTicket = (state = {}, action) => {
  switch (action.type) {
    case types.GET_All_SEARCH_TICKET_RECEIVE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        didInvalidate: false,
        items: action.gets.result,
        lastUpdated: action.receivedAt
      };
    case types.GET_All_SEARCH_TICKET_REQUEST:
      return {
        ...state,
        isFetching: true,
        isFetched: false,
        didInvalidate: false
      };
    default:
      return state;
  }
};


