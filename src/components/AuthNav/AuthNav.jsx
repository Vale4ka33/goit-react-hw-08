import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import style from './AuthNav.module.css'; // Імпортуємо стилі з CSS модуля

const getNavLinkClass = (isActive) => clsx(style.authLink, { [style.active]: isActive });

const AuthNav = () => {
  return (
    <div className={style.authContainer}>
      <NavLink
        to="/register"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => getNavLinkClass(isActive)}
      >
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;