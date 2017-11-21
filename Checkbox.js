import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Label from '../Label';

const CheckboxContainer = styled.div``;
const CheckboxStyle = styled.input``;

export default function Checkbox(props) {
  return (
    <CheckboxContainer>
      <CheckboxStyle type="checkbox" value={props.value} /> <Label text={props.label} />
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
};
