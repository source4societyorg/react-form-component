import styled from 'styled-components';

const ValidationMessage = styled.div`   
    span {
        display: ${props => props.isVisible ? 'inline' : 'none'};
        color: ${props => props.errorColor};
    }
`;

export default ValidationMessage;
