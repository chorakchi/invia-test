import React from 'react';
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'
import { fetchGetAllCitiesIfNeeded, fetchGetAllAircraftsIfNeeded, fetchGetAllAirlinesIfNeeded, fetchSearchTicket } from './../../redux/actions'
import SearchPage from './../../components/layout/SearchPage'

class ClientManagment extends React.Component {
    state= {
        loaded: false
    }

    componentDidMount() {
        const { dispatch } = this.props
        dispatch(fetchGetAllCitiesIfNeeded())
        dispatch(fetchGetAllAircraftsIfNeeded())
        dispatch(fetchGetAllAirlinesIfNeeded())
    }

    getListOfTiket = (data) => {
        const { dispatch } = this.props
        dispatch(fetchSearchTicket(data))
    }

    componentWillReceiveProps(nextProp){
        if(nextProp.searchTicket.isFetched){
            this.setState({loaded: true})
        }
    }

    render() {
        const { getAllCities, getAllAirlines, searchTicket } = this.props;
        if(this.state.loaded){
            return <Redirect to="/search-result" />
        } else{
            return (
                <React.Fragment>
                    <SearchPage
                    cities = {getAllCities.items}
                    airlines = {getAllAirlines.items}
                    show={true}
                    onSearchTicket= {(data) =>{this.getListOfTiket(data);
                    this.setState({loaded: false})
                    }}
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

export default connect(mapStateToProps)(ClientManagment)