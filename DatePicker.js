import React from 'react';
import styled from 'styled-components';
import Calendar from '../Calendar';

const DatePickerContainer = styled.div``;

const DateStyle = styled.input`
	width: 74px;
    height: 23px;
    background-color: white;
    font: 12px "segoe ui", arial, sans-serif;
    padding: 2px 1px 3px;
    border-color: #8e8e8e #b8b8b8 #b8b8b8 #8e8e8e;
	border: 1px solid #cccccc;
	borde-radius: 4px;
`;

export default function Input(props) {
  return (
    <DatePickerContainer>
      <DateStyle type="text" value="" />
      <Calendar />
    </DatePickerContainer>
  );
}

Input.defaultProps = {
};
