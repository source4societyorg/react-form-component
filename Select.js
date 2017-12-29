import React from 'react';

const Select = ({value: value, isValid: isValid, fieldData: feldData, text: text, errorColor: errorColor, onChange: onChange, options:options, ...props}) => (
  <select {...props} onChange={onChange} value={value}>
    <option value={''} key={''}>Select One</option>
    {renderOptions(options.toJS(), value)}
  </select>
);

const renderOptions = (options, value) => (
  options.map( option =>
      <option value={option.value} key={option.value}>{option.label}</option>
  )
);

export default Select;
