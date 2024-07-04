import style from './HomePage.module.css';
import phonebookImage from '../../../public/pngegg.png';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={style.homePageContainer}>
      <img className={style.image} src={phonebookImage} alt="Phonebook" />
      <div className={style.content}>
        <h1 className={style.welcomeMessage}>Manage Your Contacts Efficiently</h1>
        <p className={style.description}>
          Welcome to Phonebook, your trusted tool for organizing contacts and staying connected.
        </p>
        <div className={style.buttonContainer}>
          <NavLink to="/register" className={style.navLink}>
            Get Started
          </NavLink>
          <NavLink to="/login" className={style.navLink}>
            Sign In
          </NavLink>
        </div>
      </div>
      <div className={style.appInfo}>
        <p className={style.developerInfo}>
          Phonebook is designed to simplify your life. Developed by Anastasiia Onyshchuk,
          our goal is to provide a seamless experience for managing your contacts.
        </p>
      </div>
    </div>
  );
};

export default HomePage;