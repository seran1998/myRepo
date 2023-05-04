import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../actions/auth';
import PropTypes from 'prop-types';

const Login = ({ login, isAuthentication }) => {
  //const navigate = useNavigate();
  const [formData, setformData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setformData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    login({ email, password });
    console.log('success');
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
  };

  //redirect if loged in
  if (isAuthentication) {
    console.log('exittt');
    return <Navigate to='/dashboard' />;
  }

  return (
    <div className='container'>
      <h1 className='large text-primary'>Sign In</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Sign In Your account
      </p>
      <form
        className='form'
        action='create-profile.html'
        onSubmit={(e) => onSubmit(e)}
      >
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

        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign up</Link>
      </p>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthentication: PropTypes.bool,
};

const mapSateToProps = (state) => ({
  isAuthentication: state.auth.isAuthentication,
});
export default connect(mapSateToProps, { login })(Login);
