import React from 'react';
import PropTypes from 'prop-types';

const Select = ({value: value, isValid: isValid, fieldData: feldData, text: text, errorColor: errorColor, onChange: onChange, options:options, defaultOption: defaultOption,  ...props}) => (
  <select {...props} onChange={onChange} value={value}>
    {renderDefaultOption(defaultOption)}
    {renderOptions(options.toJS(), value)}
  </select>
);

const renderDefaultOption = (defaultOption) => (
  defaultOption !== false ?
    <option value={defaultOption.value} key={defaultOption.key}>{defaultOption.key}</option>
  : null
); 

const renderOptions = (options, value) => (
  options.map( option =>
      <option value={option.value} key={option.value}>{option.label}</option>
  )
);

Select.defaultProps = {
  defaultOption: { value: '', key: 'Select One' },
};

Select.propTypes = {
  defaultOption: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
}

export default Select;
