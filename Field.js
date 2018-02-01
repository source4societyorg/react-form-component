import utilities from '@source4society/scepter-utility-lib';
import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';
import TextArea from './TextArea';
import Select from './Select';
import FieldBlock from './FieldBlock';
import LabelBlock from './LabelBlock';
import ValidationMessage from './ValidationMessage';
import FieldContainer from './FieldContainer';
import FileUpload from './FileUpload';
import DatePicker from './DatePicker';

const renderLabel = (id, {
    layout,
    labelText,
    hideLabel,
}) => (
  hideLabel ? null :
  <LabelBlock className={`field_label ${id}_label`} layout={layout}>
    <label htmlFor={id} className={`label_${id}`}>{labelText}</label>
  </LabelBlock>
);

const renderField = (id, {
  layout,
  fieldType,
  children,
  options,
  onChange,
  isValid,
  value,
  labelText,
  hideLabel,
  errorColor,
  validationMessage,
  formLayout,
  defaultOption,
  fieldOverride,
  text,
  ...props
}) => {
  switch (fieldType) {
    case 'select':
      return (
        <Select
          value={value}
          errorColor={errorColor}
          onChange={onChange}
          isValid={isValid}
          options={options}
          defaultOption={defaultOption}
          {...props}
        />
      );
    case 'divider':
      return (
        <label
          className={`divider_label ${id}_divider_label`}
          htmlFor={id}
        >
          {text}
        </label>
      );
    case 'button':
      return (
        <button
          id={id}
          name={id}
          {...props}
        >
          {children}
        </button>
      );
    case 'textarea':
      return (
        <TextArea
          {...props}
          onChange={onChange}
          isValid={isValid}
          errorColor={errorColor}
          value={value}
        />
      );
    case 'fileUpload':
      return (
        <FileUpload
          value={value}
          onChange={onChange}
          errorColor={errorColor}
          isValid={isValid}
          {...props}
        />
      );
    case 'datepicker':
      return (
        <DatePicker
          value={value}
          onChange={onChange}
          errorColor={errorColor}
          isValid={isValid}
          {...props}
        />
      );
    default:
      return (
        <Input
          fieldType={fieldType}
          value={value}
          onChange={onChange}
          errorColor={errorColor}
          isValid={isValid}
          {...props}
        />
      );
  }
};

const renderFieldBlock = (
  id, {
    layout,
    fieldType,
    children,
    options,
    onChange,
    isValid,
    value,
    labelText,
    hideLabel,
    errorColor,
    validationMessage,
    formLayout,
    defaultOption,
    fieldOverride,
    ...props
}) => {
  if (utilities.isNotEmpty(fieldOverride)) {
    const fieldComponent = fieldOverride({
      id,
      fieldType,
      layout,
      children,
      options,
      onChange,
      isValid,
      value,
      labelText,
      hideLabel,
      errorColor,
      validationMessage,
      formLayout,
      defaultOption,
      ...props,
    });
    if (utilities.isNotEmpty(fieldComponent)) {
      return fieldComponent;
    }
  }

  if (fieldType !== 'hidden') {
    return (<FieldBlock className={`field_block ${id}_field`} layout={layout}>
      {renderField(id, {
        layout,
        fieldType,
        children,
        options,
        onChange,
        isValid,
        value,
        labelText,
        hideLabel,
        errorColor,
        validationMessage,
        formLayout,
        defaultOption,
        fieldOverride,
        ...props,
      })}
    </FieldBlock>);
  }
  return <Input fieldType={fieldType} value={value} onChange={onChange} errorColor={errorColor} isValid={isValid} {...props} />;
};

const renderValidationMessage = (id, {
  isValid,
  errorColor,
  validationMessage,
}) => (
  <ValidationMessage
    className={`validation ${id}_validation`}
    isVisible={!isValid}
    errorColor={errorColor}
  >
    <span>{validationMessage}</span>
  </ValidationMessage>
);

export default function Field({
  id,
  ...props
  }) {
  if (props.fieldType !== 'hidden') {
    return (
      <FieldContainer className={`field-container ${id}_container ${props.formLayout}`}>
        {renderLabel(id, props)}
        {renderFieldBlock(id, props)}
        {renderValidationMessage(id, props)}
      </FieldContainer>
    );
  }
  return renderFieldBlock(id, props);
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
  fieldType: PropTypes.string,
  layout: PropTypes.string,
  isValid: PropTypes.bool,
  validationMessage: PropTypes.string,
  errorColor: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.object,
  hideLabel: PropTypes.bool,
  formLayout: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.any,
  value: PropTypes.string,
  defaultOption: PropTypes.bool,
  fieldOverride: PropTypes.func,
  text: PropTypes.string,
};
