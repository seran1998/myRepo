import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import PropTypes from 'prop-types';
export const Navbar = ({ auth: { isAuthentication, loading }, logout }) => {
  const authLinks = (
    <ul>
      <li>
        <Link to='/profiles'>
          <span>Developers</span>
        </Link>
      </li>
      <li>
        <Link to='/posts'>
          <span>Posts</span>
        </Link>
      </li>
      <li>
        <Link to='/dashboard'>
          <i className='fas fa-user'></i>{' '}
          <span className='hide-sm'>Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href='#!'>
          <i className='fas fa-sign-out-alt'></i>{' '}
          <span className='hide-sm'>Logout</span>
        </a>
      </li>
    </ul>
  );
  const guestLink = (
    <ul>
      <li>
        <Link to='/profiles'>Developers</Link>
      </li>

      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </ul>
  );
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <a href='index.html'>
          <i className='fas fa-code'></i> DevConnector
        </a>
      </h1>
      {!loading && (
        <Fragment>{isAuthentication ? authLinks : guestLink}</Fragment>
      )}
    </nav>
  );
};
Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapSateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapSateToProps, { logout })(Navbar);
