import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {
  return (
     <form id={props.id} name={props.id} method={props.method} onSubmit={props.onSubmit} noValidate={props.novalidate} className={props.formLayout}>
        {props.children}    
     </form>    
  )
}

Form.defaultProps = {
  id: '',
  method: 'POST',
  novalidate: true,
  formLayout: 'vertical',
};

Form.propTypes = {
  id: PropTypes.string.isRequired,
  method: PropTypes.string,
  novalidate: PropTypes.bool,
  formLayout: PropTypes.string,
};


export default Form
