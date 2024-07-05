import style from './HomePage.module.css';

import { NavLink } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <img className={style.image} src="/pngegg.png" alt="Phonebook" />
        <h1 className={style.title}>Manage Your Contacts Efficiently</h1>
      </div>
      <p className={style.description}>
          Welcome to Phonebook, your trusted tool for organizing contacts and staying connected. 
          With Phonebook, you can effortlessly add new contacts, ensuring you never lose touch with important people. 
          Your contacts are securely saved, giving you peace of mind knowing that your information is safe. 
          Plus, you can access your contacts anytime and anywhere, making it convenient to stay connected whether you're at home, at work, or on the go.      </p>

      <div className={style.buttonGroup}>
        <NavLink to="/register" className={style.button}>
          Get Started
        </NavLink>
        <NavLink to="/login" className={style.button}>
          Sign In
        </NavLink>
      </div>
    </div>
  );
};

export default HomePage;