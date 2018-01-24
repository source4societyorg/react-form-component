import React from 'react';
import PropTypes from 'prop-types';

const SubmitButton = ({className: className, onClick:onClick, ...props}) => (
  <button className={'submit-button ' + className} onClick={onClick}>{props.children}</button>
)

SubmitButton.defaultProps = {};

SubmitButton.propTypes = {
  className: PropTypes.string
};

export default SubmitButton;
