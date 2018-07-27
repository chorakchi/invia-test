import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom'


import ScrollToTop from "./ScrollToTop";
import Search from "./../containers/search" 
import searchResult from "./../containers/searchResult" 


const Routers = () => (
  <Router>
    <div className="container">
    <ScrollToTop>
      <Route path="/" component={Search}/>
      <Route path="/search" component={Search}/>
      <Route path="/search-result" component={searchResult}/>
    </ScrollToTop>
    </div>
  </Router>
)

export default Routers;