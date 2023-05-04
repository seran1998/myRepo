import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import setAlert from '../../actions/alert';
import PropTypes from 'prop-types';
import { register } from '../../actions/auth';

const Register = ({ setAlert, register, isAuthentication }) => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('password not matched', 'danger');
    } else {
      register({ name, email, password });

      //   const newUser = {
      //     name,
      //     email,
      //     password,
      //   };

      //   try {
      //     const config = {
      //       headers: {
      //         'Content-Type': 'application/json',
      //       },
      //     };
      //     const body = JSON.stringify(newUser);
      //     const res = await axios.post('/api/users', body, config);
      //     console.log(res.data);
      //   } catch (error) {
      //     console.error(error.response.data);
      //   }
    }
  };
  if (isAuthentication) {
    return navigate('/dashboard');
  }
  return (
    <div className='container'>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form
        className='form'
        action='create-profile.html'
        onSubmit={(e) => onSubmit(e)}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='Name'
            value={name}
            onChange={(e) => onChange(e)}
            name='name'
            required
          />
        </div>
        <div className='form-group'>
          <input
            required
            onChange={(e) => onChange(e)}
            type='email'
            placeholder='Email Address'
            value={email}
            name='email'
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            required
            onChange={(e) => onChange(e)}
            value={password}
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            required
            onChange={(e) => onChange(e)}
            value={password2}
            type='password'
            placeholder='Confirm Password'
            name='password2'
            minLength='6'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapSateToProps = (state) => ({
  auth: state.auth.isAuthentication,
});
export default connect(mapSateToProps, { setAlert, register })(Register);
