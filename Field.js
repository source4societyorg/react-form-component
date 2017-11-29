import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../Label';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import DatePicker from './DatePicker';

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


export default function Field({
    id: id,
    fieldType: fieldType, 
    layout: layout, 
    labelText: labelText, 
    children: children,
    options: options, 
    onChange: onChange,
    isValid: isValid,
    errorColor: errorColor,
    value: value,
    validationMessage: validationMessage,
    ...props
  }) {

  return (
    <FieldContainer className={'field-container ' + id + '_container'}>
      <LabelBlock layout={layout}>
        <Label text={labelText} />
      </LabelBlock>
      <FieldBlock layout={layout}>
        {fieldType === 'select' ? (
          <Select value={value} onChange={onChange} isValid={isValid} options={options} {...props}>        
          </Select>      
        ) : fieldType === 'textarea' ? (
          <textarea {...props}>
            {children}
          </textarea>
        ) : fieldType === 'datepicker' ? (
          <DatePicker value={value} onChange={onChange} isValid={isValid} {...props} />
        ) : (
          <Input fieldType={fieldType} value={value} onChange={onChange} isValid={isValid} {...props} />
        )}
      </FieldBlock>
      <ValidationMessage isVisible={!isValid} errorColor={errorColor}><span>{validationMessage}</span></ValidationMessage>
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
  onChange: PropTypes.func,
  options: PropTypes.object,
};
