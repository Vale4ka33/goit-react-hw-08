import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import style from './UserMenu.module.css';

const UserMenu = () => {
   const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={style.userMenu}>
      <p className={style.userMenuText}>Welcome, {user.name}!</p>
      <button
        className={style.logoutBtn}
        type="button"
        onClick={() => {
          dispatch(logout());
        }}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
