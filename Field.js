import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Label from '../Label';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import DatePicker from './DatePicker';
import FieldBlock from './FieldBlock';
import LabelBlock from './LabelBlock';
import ValidationMessage from './ValidationMessage';
import FieldContainer from './FieldContainer';

const renderLabel = (id, {
    layout: layout,
    labelText: labelText,
    hideLabel: hideLabel, 
}) => ( 
  hideLabel ? null :
    <LabelBlock className={'field_label ' + id + '_label'} layout={layout}>
        <Label text={labelText} />
    </LabelBlock> 
);

const renderFieldBlock = (id, {
    layout: layout,
    fieldType: fieldType, 
    children: children,
    options: options, 
    onChange: onChange,
    isValid: isValid,
    value: value,  
    labelText: labelText,
    hideLabel: hideLabel,  
    errorColor: errorColor,
    validationMessage: validationMessage,
    ...props
}) => (
  <FieldBlock className={'field_block ' + id + '_field'} layout={layout}>
    {fieldType === 'select' ? (
      <Select value={value} errorColor={errorColor} onChange={onChange} isValid={isValid} options={options} {...props} />    
    ) : fieldType === 'button' ? (
      <button id={id} name={id} {...props}>
        {children}
      </button>
    ) : fieldType === 'textarea' ? (
      <textarea {...props}>
        {children}
      </textarea>
    ) : fieldType === 'datepicker' ? (
      <DatePicker value={value} onChange={onChange} errorColor={errorColor} isValid={isValid} {...props} />
    ) : (
      <Input fieldType={fieldType} value={value} onChange={onChange} errorColor={errorColor} isValid={isValid} {...props} />
    )}
  </FieldBlock>
);

const renderValidationMessage = (id, {
  isValid: isValid,
  errorColor: errorColor,
  validationMessage: validationMessage,
  ...props,
}) => (
    <ValidationMessage className={'validation ' + id + '_validation'} isVisible={!isValid} errorColor={errorColor}><span>{validationMessage}</span></ValidationMessage>
);

export default function Field({
    id: id,
    ...props
  }) {

  return (
    <FieldContainer className={'field-container ' + id + '_container'}>
      {renderLabel(id, props)}
      {renderFieldBlock(id, props)}
      {renderValidationMessage(id, props)}
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
  errorColor: '#cc0000',
  hideLabel: false,
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
  hideLabel: PropTypes.bool,
};
