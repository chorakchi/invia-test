import * as types from "../constants/ActionTypes";

export const getAllCities = (state = {}, action) => {
  switch (action.type) {
    case types.GET_All_CITIES_RECEIVE:
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
    case types.GET_All_CITIES_REQUEST:
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


