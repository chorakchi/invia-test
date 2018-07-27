import * as types from "../constants/ActionTypes";

export const getAllAirlines = (state = {}, action) => {
  switch (action.type) {
    case types.GET_All_AIRLINES_RECEIVE:
      return {
        ...state,
        isFetching: false,
        isFetched: true,
        didInvalidate: false,
        items: action.gets.result.map( item => ({
          value: item.id,
          label: item.label,
        })),
        lastUpdated: action.receivedAt
      };
    case types.GET_All_AIRLINES_REQUEST:
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


