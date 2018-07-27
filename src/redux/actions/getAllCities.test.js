import * as actions from './getAllCities'
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to getAllCitiesRequest', () => {
    const expectedAction = {
      type: types.GET_All_CITIES_REQUEST,
    }
    expect(actions.getAllCitiesRequest()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to getAllCitiesRequest', () => {
    const json= {}
    const expectedAction = {
      type: types.GET_All_CITIES_RECEIVE,
      gets: json,
    receivedAt: Date.now()
    }
    expect(actions.getAllCitiesReceive(json)).toEqual(expectedAction)
  })
})



