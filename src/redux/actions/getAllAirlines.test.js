import * as actions from './getAllAirlines'
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to getAllAirlinesRequest', () => {
    const expectedAction = {
      type: types.GET_All_AIRLINES_REQUEST,
    }
    expect(actions.getAllAirlinesRequest()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to getAllAirlinesRequest', () => {
    const json= {}
    const expectedAction = {
      type: types.GET_All_AIRLINES_RECEIVE,
      gets: json,
    receivedAt: Date.now()
    }
    expect(actions.getAllAirlinesReceive(json)).toEqual(expectedAction)
  })
})