import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import style from './Navigation.module.css'

const getNavLinkClassName = ({ isActive }) => 
  isActive ? `${style.nav} ${style.navActive}` : style.nav;

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={style.nav}>
      <NavLink
        to='/'
        className={getNavLinkClassName}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to='/contacts'
          className={getNavLinkClassName}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};


export default Navigation;
