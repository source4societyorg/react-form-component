import styled from 'styled-components';

const FieldBlock = styled.div`
	display: ${(props) => props.layout};
    margin-left: ${(props) => (props.layout === 'inline-block' ? '5px' : '0px')};  
`;

export default FieldBlock;
