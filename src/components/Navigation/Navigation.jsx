import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectisLoggedIn } from '../../redux/auth/selectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectisLoggedIn);

  return <nav>
    <NavLink to='/'>Home</NavLink>
    {isLoggedIn && <NavLink to='/contacts'>Contacts</NavLink>}

  </nav>;
};

export default Navigation;
