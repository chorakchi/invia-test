import React from 'react'
import Language from "./../language";
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from 'material-ui-pickers/utils/date-fns-utils';
import MuiPickersUtilsProvider from 'material-ui-pickers/utils/MuiPickersUtilsProvider';
import DatePicker from 'material-ui-pickers/DatePicker';
import LeftArrowIcon from '@material-ui/icons/KeyboardArrowLeft';
import RightArrowIcon  from '@material-ui/icons/KeyboardArrowRight';
import moment from 'moment';
import jMoment from 'moment-jalaali';
import JalaliUtils from 'material-ui-pickers-jalali-utils';

if((window.location.href).includes('/fa/'))
jMoment.loadPersian({ dialect: 'persian-modern', usePersianDigits: true });

function format(date, formatting) {
if (date === null) {
  return '';
}
return jMoment(date).locale('fa').format(formatting);
}

const styles = theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
      },
})
String.prototype.toEnglishDigitsOnce = function () {
    var charCodeZero = '۰'.charCodeAt(0);
    return parseInt(this.replace(/[۰-۹]/g, function (w) {
        return w.charCodeAt(0) - charCodeZero;
    }));
}

String.prototype.toEnglishDigits = function () {
    var temp = []
    temp = this.split('-')
    temp = temp.forEach(item => item.toEnglishDigitsOnce()).join('-')
    return temp

}

class CustomDatePicker extends React.Component {
    state = {
        selectedDate: this.props.value ? this.props.value : null,
      }

      componentWillReceiveProps(nextProps){
          console.log('dateprop',nextProps.value);
          if(nextProps.value)
          this.setState({selectedDate: nextProps.value})
      }
      handleDateChange = (date) => {
          console.log('date',date);
          this.setState({ selectedDate: date });
          if(date != null)
          this.props.onValue(moment(date).format('YYYY-MM-DD'));
        }
        handleJDateChange = (date) => {
            console.log('date',date);
            this.setState({ selectedDate: date });
            if(date != null)
        this.props.onValue(moment(date).format('YYYY-MM-DD'));
    }
    
    componentDidMount(){
        if(this.state.selectedDate)
        this.props.onValue(moment(this.state.selectedDate).format('YYYY-MM-DD'));
    }
    
    render(){
        const { selectedDate } = this.state;
        const { classes, language , label, width } = this.props;

        return(
            <React.Fragment>
                <MuiPickersUtilsProvider utils={language ==='fa' ? JalaliUtils : DateFnsUtils} locale={language === null ? 'fa' : null}>
                <DatePicker
                style={{ width: width, display: this.props.hidden === true ? 'none' : null }}
                className = {classes.textField}
                value={selectedDate}
                leftArrowIcon= {<LeftArrowIcon/>} 
                rightArrowIcon= {<RightArrowIcon/>}
                clearable
                invalidDateMessage=''
                label= {label}
                okLabel={language ==='fa' ? "تأیید" : 'OK'}
                cancelLabel={language ==='fa' ? "لغو" : "CANCEL"}
                clearLabel={language ==='fa' ? "پاک کردن" : "CLEAR"}
                onChange={language === 'fa' ? this.handleJDateChange : this.handleDateChange}
                animateYearScrolling={false}
                labelFunc ={language ==='fa' ? date => format(date, 'jYYYY/jMM/jDD') : date => format(date, 'YYYY/MM/DD')}
        />
            </MuiPickersUtilsProvider>
            </React.Fragment>

        )
    }
}

export default withStyles(styles)(CustomDatePicker)