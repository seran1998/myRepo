import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export const Landing = ({ isAuthentication }) => {
  const navigate = useNavigate();

  if (isAuthentication) {
    navigate('/dashboard');
  }
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Developer Connector</h1>
          <p className='lead'>
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthentication: PropTypes.bool,
};

const mapSateToProps = (state) => ({
  isAuthentication: state.auth.isAuthentication,
});

export default connect(mapSateToProps)(Landing);
