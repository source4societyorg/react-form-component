import React from 'react';

const Select = ({value: value, isValid: isValid, errorColor: errorColor, onChange: onChange, options:options, ...props}) => (
    <select {...props} onChange={onChange} defaultValue={value}>
      {renderOptions(options.toJS(), value)}
    </select>
);

const renderOptions = (options, value) => (
    options.map( option =>
        <option value={option.value} key={option.value}>{option.label}</option>
    )
);

export default Select;
