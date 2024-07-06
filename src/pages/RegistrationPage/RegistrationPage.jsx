import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import style from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={style.registrationPageContainer}>
      <h2 className={style.title}>Register</h2>
      <RegistrationForm />
      <p className={style.loginLink}>
        or <Link to="/login" className={style.link}>Log in</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default RegistrationPage;