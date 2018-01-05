import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const FileUploadStyle = styled.div`
  input.file-input {
    display: none;
  }
`;

export default function FileUpload({
    onChange: onChange,
    isValid: isValid,
    value: value,  
    errorColor: errorColor,
    validationMessage: validationMessage,
    ...props
  }) {
  
  let inputRef = null;

  return (
    <FileUploadStyle className={'upload-widget'}>
      <input type="file" ref={input => inputRef = input} onChange={onChange} className={'file-input'} />
      <button onClick={ (evt) => { evt.preventDefault(); inputRef.click() } }>Upload</button>
    </FileUploadStyle>
  )
}

FileUpload.defaultProps = {
  fieldType: 'text',
  value: '',
  isValid: true,
  errorColor: '#cc0000'
};

FileUpload.propTypes = {
  fieldType: PropTypes.string.isRequired,
  value: PropTypes.string,
  isValid: PropTypes.bool.isRequired,
  errorColor: PropTypes.string,
  onChange: PropTypes.func,
}
