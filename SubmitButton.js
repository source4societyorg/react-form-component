import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({ className, onClick, ...props }) => (
  <button className={`submit-button ${className}`} onClick={onClick}>{props.children}</button>
);

SubmitButton.defaultProps = {};

SubmitButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.object,
};

export default SubmitButton;
