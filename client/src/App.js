import './App.css';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import { Fragment, useEffect } from 'react';

//Redux provider
import store from './store';
import { Provider } from 'react-redux';
import Alert from './components/layouts/alert';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

import PrivateRoute from './components/routing/PrivateRoute';
import Board from './components/Dashboard/Board';
import CreateProfile from './components/profile-form/CreateProfile';
import EditProfile from './components/profile-form/EditProfile';
import AddExperience from './components/profile-form/AddExperience';
import AddEducation from './components/profile-form/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/Profile/Profile';
import Posts from './components/Posts/Posts';
import Post from './components/post/Post';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Fragment>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Landing />}></Route>
          </Routes>
          <section className='container'>
            <Alert />

            <Routes>
              <Route exact path='/register' element={<Register />}></Route>
              <Route exact path='/login' element={<Login />}></Route>
              <Route exact path='/profiles' element={<Profiles />}></Route>
              <Route exact path='/profile/:id' element={<Profile />}></Route>
              <Route
                exact
                path='/dashboard'
                element={
                  <PrivateRoute>
                    <Board />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path='/create-profile'
                element={
                  <PrivateRoute>
                    <CreateProfile />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path='/edit-profile'
                element={
                  <PrivateRoute>
                    <EditProfile />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path='/add-experience'
                element={
                  <PrivateRoute>
                    <AddExperience />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path='/add-education'
                element={
                  <PrivateRoute>
                    <AddEducation />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path='/posts'
                element={
                  <PrivateRoute>
                    <Posts />
                  </PrivateRoute>
                }
              />
              <Route
                exact
                path='/post/:id'
                element={
                  <PrivateRoute>
                    <Post />
                  </PrivateRoute>
                }
              />
            </Routes>
          </section>
        </Fragment>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
