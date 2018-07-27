import * as actions from './searchTicket'
import * as types from '../constants/ActionTypes';

describe('actions', () => {
  it('should create an action to getAllAirlinesRequest', () => {
    const expectedAction = {
      type: types.GET_All_SEARCH_TICKET_REQUEST,
    }
    expect(actions.searchTicketRequest()).toEqual(expectedAction)
  })
})

describe('actions', () => {
  it('should create an action to getAllAircrafts', () => {
    const json= {}
    const expectedAction = {
      type: types.GET_All_SEARCH_TICKET_RECEIVE,
      gets: json,
    receivedAt: Date.now()
    }
    expect(actions.searchTicketReceive(json)).toEqual(expectedAction)
  })
})



