import React from 'react';
import PropTypes from 'prop-types';
import DatePickerComponent from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import utilities from '@source4society/scepter-utility-lib';
import Calendar from './Calendar';
import DatePickerContainer from './DatePickerContainer';

const DatePicker = ({
  value,
  className,
  isValid,
  errorColor,
  onChange,
  ...props
}) => {
  const parsedValue = utilities.ifTrueElseDefault(value, moment(value, 'X'));
  return (
    <DatePickerContainer errorColor={errorColor}>
      <DatePickerComponent
        utcOffset={props.utcOffset}
        selected={parsedValue}
        className={`datepicker ${className}`}
        onChange={(date) => {
          const evt = { target: { value: undefined } };
          if (!utilities.isEmpty(date)) {
            let timestamp = null;
            timestamp = date.unix().toString();
            evt.target.value = timestamp;
          }
          onChange(evt);
        }}
        dateFormat={utilities.valueOrDefault(props.format, 'M/D/YY')}
      />
      <Calendar />
    </DatePickerContainer>
  );
};

DatePicker.defaultProps = {
  value: '',
  className: '',
};

DatePicker.propTypes = {
  value: PropTypes.string,
  className: PropTypes.string,
  isValid: PropTypes.bool,
  errorColor: PropTypes.string,
  onChange: PropTypes.func,
  utcOffset: PropTypes.oneOf([PropTypes.string, PropTypes.number]),
  format: PropTypes.string,
};

export default DatePicker;
