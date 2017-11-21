import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../Label';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import Datepicker from './DatePicker';

const FieldBlock = styled.div`
	display: ${(props) => props.layout};
    margin-left: ${(props) => (props.layout === 'inline-block' ? '5px' : '0px')};
    Input, Select, TextArea {
        width: 100%;
    }
`;

const LabelBlock = styled.div`
    padding-top: 7px;
    display: ${(props) => props.layout}
`;

const FieldContainer = styled.div`
`;

const ValidationMessage = styled.div`   
    span {
        display: ${props => props.isVisible ? 'inline' : 'none'};
        color: ${props => props.errorColor};
    }
`;


export default function Field(props) {
  return (
    <FieldContainer className="field-container">
      <LabelBlock layout={props.layout}>
        <Label text={props.labelText} />
      </LabelBlock>
      <FieldBlock layout={props.layout}>
        {props.fieldType === 'select' ? (
          <Select>
            {props.children}
          </Select>      
        ) : props.fieldType === 'textarea' ? (
          <TextArea>
            {props.children}
          </TextArea>
        ) : props.fieldType === 'datepicker' ? (
          <Datepicker />
        ) : (
          <Input fieldType={props.fieldType} value={props.value} onChange={props.onChange} isValid={props.isValid} />
        )}
      </FieldBlock>
      <ValidationMessage isVisible={!props.isValid} errorColor={props.errorColor}><span>{props.validationMessage}</span></ValidationMessage>
    </FieldContainer>
  );
}

Field.defaultProps = {
  labelText: '',
  value: '',
  fieldType: 'text',
  layout: 'block',
  isValid: true,
  validationMessage: '',
  errorColor: '#cc0000'
};

Field.propTypes = {
  labelText: PropTypes.string,
  value: PropTypes.string,
  fieldType: PropTypes.string,
  layout: PropTypes.string,
  isValid: PropTypes.bool,
  validationMessage: PropTypes.string,
  errorColor: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
