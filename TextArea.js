import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ onChange, value, isValid, className }) => (
  <textarea value={value} onChange={onChange} className={className + (isValid ? ' valid' : ' invalid')} />
);

TextArea.defaultProps = {
  className: 'field_textarea',
  value: '',
};

TextArea.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  isValid: PropTypes.bool,
};

export default TextArea;
