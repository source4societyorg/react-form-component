import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputStyle = styled.input`
    border: solid 1px black;
    border-color: ${(props) => (props.isValid ? 'black' : props.errorColor)};
    color: black;
`;

export default function Input({
    fieldType: fieldType,
    onChange: onChange,
    isValid: isValid,
    errorColor: errorColor,
    ...props
  }) {

  return (
    <InputStyle type={fieldType} onChange={onChange} className={isValid ? 'valid' : 'invalid'} isValid={isValid} errorColor={errorColor} checked={props.checked} {...props} />
  )
}

Input.defaultProps = {
  fieldType: 'text',
  value: '',
  isValid: true,
  errorColor: '#cc0000'
};

Input.propTypes = {
  fieldType: PropTypes.string.isRequired,
  isValid: PropTypes.bool.isRequired,
  errorColor: PropTypes.string,
  onChange: PropTypes.func 
}
