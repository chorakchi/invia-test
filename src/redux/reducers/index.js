import { combineReducers } from "redux";

import { getAllCities } from "./getAllCities";
import { getAllAircrafts } from "./getAllAircrafts";
import { getAllAirlines } from "./getAllAirlines";
import { searchTicket } from "./searchTicket";

export default combineReducers({
  getAllCities,
  getAllAircrafts,
  getAllAirlines,
  searchTicket
});
