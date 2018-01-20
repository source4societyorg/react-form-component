import styled from 'styled-components';

const DatePickerContainer = styled.div`
    input:not(type=checkbox) {
      display: inline-block;
      vertical-align: middle;      
    }
    & > :first-child {
      display: inline-block;
    }

`;

export default DatePickerContainer;
