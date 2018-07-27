import React from "react"
import AutoComplete from "./../../common/element/CustomAutoComplete"
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import styled, { css } from 'styled-components'
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Background from './../../../asset/image/meer.jpg'

const Container = styled.div`
width: 100%;
position: fixed;
height: ${window.innerHeight + 'px'}; 
background-image: url(${Background});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
display: flex;
align-items: center;
opacity: 1;
transition: all 0.5s ease;
@keyframes animat2 {
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
}
animation: animat2 300ms ease-out ;
animation-fill-mode: forwards;
`
const Paper = styled.div`
position: relative;
display:flex;
align-items: center;
margin: auto;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
@media (max-width: 900px) {
      ${ css`
      width: 80%;
height: 80%;
      ` }
    }
margin: auto;
box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
background-color:white;
border-bottom: 5px solid #4ab9d7;
border-radius: 8px;
${props => props.show && css`
@keyframes DrawerStyledAnimaet {
  from {
    transform: translate(0, 50px);
  }
  to {
    transform: translate( 0, 0);
  }
}
animation: DrawerStyledAnimaet 300ms ease ;
animation-fill-mode: forwards;
`}
${props => props.show == false && css`

@keyframes hideDrawerStyledAnimaet {
  from {
    transform: translate( 0, 0);
    opacity:1;
  }
  to {
    transform: translate(0, 50px);
    opacity:0;
  }
}
animation: hideDrawerStyledAnimaet 300ms ease ;
animation-fill-mode: forwards;
`}
`


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {

  },
});

class SearchPage extends React.Component {
  state = {
    value: {
      originCityId: '0',
      destinationCityId: '0',
      airlineId: '0',
      passengers: '1'
    }
  }

  onSearchTicket = () =>{
    this.props.onSearchTicket(this.state.value)
  }
  

  handelChangeAutoCompleteValue = (value, name) => {
    this.setState({
      value: {
        ...this.state.value,
        [name]: value,
      }
    });
  };
  render() {
    const { classes, cities, airlines } = this.props
    return (<Container >
      <Paper show= {this.props.show}>
      <AutoComplete
        width={200}
        label="Origin City"
        name={"originCityId"}
        placeholder="Select Orgin"
        value={this.state.value.originCityId}
        suggestions={cities || []}
        onValue={data => { this.handelChangeAutoCompleteValue(data, "originCityId") }}
      />
      <AutoComplete
        width={200}
        label="Destination City"
        name={"destinationCityId"}
        placeholder="Select destination"
        value={this.state.value.originCityId}
        suggestions={cities}
        onValue={data => { this.handelChangeAutoCompleteValue(data, "destinationCityId") }}
      />
      <AutoComplete
        width={200}
        label="Airline"
        name={"airlineId"}
        placeholder="Select AirlineId"
        value={this.state.value.airlineId}
        suggestions={airlines}
        onValue={data => { this.handelChangeAutoCompleteValue(data, "airlineId") }}
      />
      <TextField
        style={{width: 100}}
        className={classes.margin}
        id="input-with-icon-textfield"
        label="passengers"
        name="passengers"
        value={this.state.value.passengers}
        onChange={ event => { this.setState({
          value: {
            ...this.state.value,
            [event.target.name]: event.target.value,
          }
        }); }}

        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle color= "primary" />
            </InputAdornment>
          ),
        }}
      />
      <Button onClick={this.onSearchTicket} variant="extendedFab" className={classes.button}>
        <SearchIcon className={classes.extendedIcon} />
        search
      </Button>
      </Paper>
    </Container>)
  }
}

SearchPage.propTypes = {
  classes: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  airlines: PropTypes.array.isRequired,
};

SearchPage.defaultProps = {
  cities: [],
  airlines: [],
}

export default withStyles(styles)(SearchPage);