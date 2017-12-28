import React from 'react';

const Select = ({value: value, isValid: isValid, fieldData: feldData, text: text, errorColor: errorColor, onChange: onChange, options:options, ...props}) =>{ console.log(value); return (
  <select {...props} onChange={onChange} value={value}>
    {renderOptions(options.toJS(), value)}
  </select>
);}

const renderOptions = (options, value) => (
  options.map( option =>
      <option value={option.value} key={option.value}>{option.label}</option>
  )
);

export default Select;
