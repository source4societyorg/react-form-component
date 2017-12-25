import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({onChange: onChange, value: value, className: className, ...props}) => (
    <textarea value={value} onChange={onChange} className={className} />
)

TextArea.defaultProps = {
  className: 'field_textarea',
  value: '',
};

TextArea.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default TextArea;
