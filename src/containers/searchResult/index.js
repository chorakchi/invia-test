import React from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { fetchGetAllCitiesIfNeeded, fetchGetAllAircraftsIfNeeded, fetchGetAllAirlinesIfNeeded, fetchSearchTicket } from './../../redux/actions'
import SearchResultPage from './../../components/layout/SearchResultPage'

class searchResult extends React.Component {
    state= {
        loaded: true,
        backtoSearch: false
    }
    componentDidMount(){
        this.setState({loaded:true})
    }

    getListOfTiket = (data) => {
        const { dispatch } = this.props
        dispatch(fetchSearchTicket(data.originCityId, data.destinationCityId, data.airlineId, data.passengers))
    }

    render() {
        const { getAllCities, getAllAirlines, getAllAircrafts, searchTicket } = this.props;
        if(this.state.backtoSearch){
            return <Redirect to="/search" />
        } else{
            return (
                <React.Fragment>
                    <SearchResultPage
                    result = {searchTicket.items}
                    cities = {getAllCities.items}
                    airlines = {getAllAirlines.items}
                    aircrafts = {getAllAircrafts.items}
                    show={this.state.loaded}
                    onBacktoSearch= {() =>{this.setState({backtoSearch :true})}}
                    />


            </React.Fragment>
        );
    }
    }
}


const mapStateToProps = state => {
    const { getAllCities, getAllAirlines, getAllAircrafts, searchTicket } = state
    return { getAllCities, getAllAirlines, getAllAircrafts, searchTicket }
}
  

export default connect(mapStateToProps)(searchResult)