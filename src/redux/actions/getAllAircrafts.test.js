import * as actions from './getAllAircrafts'
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to getAllAircrafts', () => {
    const expectedAction = {
      type: types.GET_All_AIRCRAFTS_REQUEST,
    }
    expect(actions.getAllAircraftsRequest()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to getAllAircrafts', () => {
    const json= {}
    const expectedAction = {
      type: types.GET_All_AIRCRAFTS_RECEIVE,
      gets: json,
    receivedAt: Date.now()
    }
    expect(actions.getAllAircraftsReceive(json)).toEqual(expectedAction)
  })
})



