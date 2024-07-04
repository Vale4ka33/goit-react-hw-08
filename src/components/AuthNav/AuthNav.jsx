import { NavLink } from "react-router-dom";
import style from './AuthNav.module.css';

const AuthNav = () => {
   return (
    <div className={style.authNavigation}>
      <NavLink to="/register" className={style.authNavLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={style.authNavLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
