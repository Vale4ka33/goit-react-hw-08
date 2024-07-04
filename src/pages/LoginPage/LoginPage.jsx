import { Link } from "react-router-dom";
import LoginForm from "../../components/LoginForm/LoginForm";
import style from './LoginPage.module.css';
import { Toaster } from "react-hot-toast";

const LoginPage = () => {
  return (
    <div className={style.loginPageContainer}>
      <h2>Log in</h2>
      <LoginForm />
      <p>
        or <Link to="/register">Register</Link>
      </p>
      <Toaster />
    </div>
  );
};

export default LoginPage;