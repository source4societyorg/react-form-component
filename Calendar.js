import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import '!file-loader?name=[name].[ext]!../../images/calendar.jpg';

const CalendarIcon = styled.img`
    width: 19px;
    cursor: pointer;
    margin-left: 6px;
    margin-right: 6px;
`;

const Calendar = (props) => (
    <CalendarIcon src="/calendar.jpg" />
);

export default Calendar;
