import React from 'react';
import styled from 'styled-components';

const SelectStyle = styled.select`
	background-color: #F4F4F4;
    border: 1px solid #cccccc;
    border-radius: 4px;
`;

export default function Input(props) {
  return (
    <SelectStyle>
      {props.children}
    </SelectStyle>
  );
}
