import React from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import Field from '../Field';
import Button from '../Button';

const LoginForm = (props) => {
  const errors = props.formData.errors || [];
  const form = props.formData.form || [{title:'', properties:[]}]; 
  const view = props.formData.view || [];

  return (
    <Form title="login_form">       
        <Field name="username" id="username" labelText="Username" fieldType="text" value={props.username || ''} /> 
        <Field name="password" id="password" labelText="Password" fieldType="password" value={props.password || ''}  /> 
        <Button label={props.submitLabel} />
    </Form>
  );
}

LoginForm.defaultProps = {
  formData: {},
  username: '',
  password: '',
  submitLabel: 'Log In'
};

LoginForm.propTypes = {
  formData: PropTypes.object,
  username: PropTypes.string,
  password: PropTypes.string,
  submitLabel: PropTypes.string
};

export default LoginForm
