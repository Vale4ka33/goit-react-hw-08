import styles from './HomePage.module.css';
import phonebookImage from '../../../public/pngegg.png';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <img className={styles.image} src={phonebookImage} alt="Phonebook" />
      <div className={styles.content}>
        <h1 className={styles.welcomeMessage}>Manage Your Contacts Efficiently</h1>
        <p className={styles.description}>
          Welcome to Phonebook, your trusted tool for organizing contacts and staying connected.
        </p>
        <div className={styles.buttonContainer}>
          <NavLink to="/register" className={styles.navLink}>
            Get Started
          </NavLink>
          <NavLink to="/login" className={styles.navLink}>
            Sign In
          </NavLink>
        </div>
      </div>
      <div className={styles.appInfo}>
        <p className={styles.developerInfo}>
          Phonebook is designed to simplify your life. Developed by Anastasiia Onyshchuk,
          our goal is to provide a seamless experience for managing your contacts.
        </p>
      </div>
    </div>
  );
};

export default HomePage;