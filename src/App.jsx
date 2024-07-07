import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from './redux/auth/operations';
import { selectRefreshing } from './redux/auth/selectors';
import Layout from "./components/Layout/Layout";
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const RegistrationPage = React.lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = React.lazy(() => import('./pages/LoginPage/LoginPage'));
const HomePage = React.lazy(() => import('./pages/HomePage/HomePage'));
const ContactsPage = React.lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading your information... Please wait </p>
  ) : (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={<RestrictedRoute component={RegistrationPage} />}
          />
          <Route
            path="/login"
            element={<RestrictedRoute component={LoginPage} />}
          />
          <Route
            path="/contacts"
            element={<PrivateRoute component={ContactsPage} />}
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;