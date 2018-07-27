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
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import TableHead from '@material-ui/core/TableHead';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import moment from 'moment';
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
width: 70%;
height: 70%;
position: relative;
display:flex;
align-items: center;
margin: auto;
flex-direction: row;
flex-wrap: wrap;
padding: 9px;
padding-bottom: 30px;
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
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 500,
  },
  tableWrapper: {
    overflowX: 'auto',
    width: '100%',
    height: '100%',
  },
});
const actionsStyles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing.unit * 2.5,
  },
});

class TablePaginationActions extends React.Component {
  handleFirstPageButtonClick = event => {
    this.props.onChangePage(event, 0);
  };

  handleBackButtonClick = event => {
    this.props.onChangePage(event, this.props.page - 1);
  };

  handleNextButtonClick = event => {
    this.props.onChangePage(event, this.props.page + 1);
  };

  handleLastPageButtonClick = event => {
    this.props.onChangePage(
      event,
      Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
    );
  };

  render() {
    const { classes, count, page, rowsPerPage, theme } = this.props;

    return (
      <div className={classes.root}>
        <IconButton
          onClick={this.handleFirstPageButtonClick}
          disabled={page === 0}
          aria-label="First Page"
        >
          {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
          onClick={this.handleBackButtonClick}
          disabled={page === 0}
          aria-label="Previous Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
          onClick={this.handleNextButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Next Page"
        >
          {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
          onClick={this.handleLastPageButtonClick}
          disabled={page >= Math.ceil(count / rowsPerPage) - 1}
          aria-label="Last Page"
        >
          {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
      </div>
    );
  }
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired,
};

const TablePaginationActionsWrapped = withStyles(actionsStyles, { withTheme: true })(
  TablePaginationActions,
);

let counter = 0;
function createData(name, calories, fat) {
  counter += 1;
  return { id: counter, name, calories, fat };
}

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#4ab9d7',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


class SearchResultPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [
        ...this.props.result
      ],
      page: 0,
      rowsPerPage: 5,
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { classes, result, cities, airlines, aircrafts } = this.props;
    const { data, rowsPerPage, page } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (<Container >
      <Paper show={this.props.show}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
          <TableHead>
          <TableRow>
            <CustomTableCell>Origin City</CustomTableCell>
            <CustomTableCell >Destination City</CustomTableCell>
            <CustomTableCell >DepartureTime</CustomTableCell>
            <CustomTableCell >ArrivalTime</CustomTableCell>
            <CustomTableCell >Airline</CustomTableCell>
            <CustomTableCell >Aircraft</CustomTableCell>
            <CustomTableCell numeric >Flight Num</CustomTableCell>
            <CustomTableCell numeric >Availability</CustomTableCell>
            <CustomTableCell numeric >Price</CustomTableCell>
          </TableRow>
        </TableHead>
            <TableBody>
              {result.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(n => {
                return (
                  <TableRow key={n.id}>

                    <TableCell component="th" scope="row" >{cities.filter( item => n.originCityId === item.value).map( item => item.label)[0]}</TableCell>
                    <TableCell >{cities.filter( item => n.destinationCityId === item.value).map( item => item.label)[0]}</TableCell>
                    <TableCell >{moment(n.DepartureTime).format('YYYY/MM/DD hh:mm:ss')}{}</TableCell>
                    <TableCell >{moment(n.ArrivalTime).format('YYYY/MM/DD hh:mm:ss')}{}</TableCell>
                    <TableCell >{airlines.filter( item => n.airlineId === item.value).map( item => item.label)[0]}</TableCell>
                    <TableCell >{aircrafts.filter( item => n.AircraftId === item.value).map( item => item.label)[0]}</TableCell>
                    <TableCell numeric>{n.flightNumber}</TableCell>
                    <TableCell numeric>{n.availability}</TableCell>
                    <TableCell numeric>{n.price} € </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  colSpan={3}
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActionsWrapped}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>

        <Button onClick={()=>{this.props.onBacktoSearch()}} variant="extendedFab" aria-label="Search" className={classes.button}>
        <SearchIcon className={classes.extendedIcon} />
        back To Search
      </Button>
      </Paper>
    </Container>)
  }
}

SearchResultPage.propTypes = {
  classes: PropTypes.object.isRequired,
  cities: PropTypes.array.isRequired,
  result: PropTypes.array.isRequired,
  airlines: PropTypes.array.isRequired,
  aircrafts: PropTypes.array.isRequired,
  airlines: PropTypes.array.isRequired,
};

SearchResultPage.defaultProps = {
  cities: [],
  airlines: [],
  aircrafts: [],
  result: [],
  airlines: [],
}

export default withStyles(styles)(SearchResultPage);