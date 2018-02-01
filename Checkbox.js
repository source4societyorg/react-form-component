import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CheckboxContainer = styled.div``;
const CheckboxStyle = styled.input``;

export default function Checkbox(props) {
  return (
    <CheckboxContainer>
      <CheckboxStyle type="checkbox" value={props.value} id={props.id} /> <label htmlFor={props.id}>{props.label}</label>
    </CheckboxContainer>
  );
}

Checkbox.defaultProps = {
  value: '',
  label: '',
};

Checkbox.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  id: PropTypes.string,
};
