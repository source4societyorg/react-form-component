import React from 'react';
import PropTypes from 'prop-types';
import Calendar from './Calendar';
import DatePickerContainer from './DatePickerContainer';

const DatePicker = ({value: value, className: className, isValid: isValid, errorColor: errorColor,  ...props}) => ( 
    <DatePickerContainer errorColor={errorColor}>
      <input type="text" className={'datepicker ' + (className)} value={value} {...props} />
      <Calendar />
    </DatePickerContainer>
);

DatePicker.defaultProps = {
  value: '',
  className: '',
};

DatePicker.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
};

export default DatePicker;
