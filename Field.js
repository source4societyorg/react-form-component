import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
        <label className={'label_' + id}>{labelText}</label>
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
    ) : fieldType === 'divider' ? (
      <label className={'divider_label ' + id + '_divider_label'}>{props.text}</label>
    ) : fieldType === 'button' ? (
      <button id={id} name={id} {...props}>
        {children}
      </button>
    ) : fieldType === 'textarea' ? (
      <TextArea {...props} onChange={onChange} isValid={isValid} errorColor={errorColor} value={value} />        
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
    <FieldContainer className={'field-container ' + id + '_container ' + props.formLayout}>
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
  formLayout: 'vertical',
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
