import React from 'react';
import PropTypes from 'prop-types';
import Calendar from './Calendar';
import DatePickerContainer from './DatePickerContainer';
import DatePickerComponent from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import utilities from '@source4society/scepter-utility-lib'

const DatePicker = ({value: value, className: className, isValid: isValid, errorColor: errorColor, onChange: onChange,  ...props}) => {
  let parsedValue = value ? moment(value, 'X') : undefined
   
  return (
    <DatePickerContainer errorColor={errorColor}>
      <DatePickerComponent    
        utcOffset={props.utcOffset} 
        selected={parsedValue ? parsedValue : undefined}
        className={'datepicker ' + (className)}     
        onChange={(date) => {
          let timestamp = null
          timestamp = date.unix().toString()
          let evt = { target: { value: timestamp } };
          onChange(evt) 
        }}   
        dateFormat={props.format || 'M/D/YY'} 
        />
      <Calendar />
    </DatePickerContainer>
  );
}

DatePicker.defaultProps = {
  value: '',
  className: '',
};

DatePicker.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

export default DatePicker;
