import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import LoginForm from '../../components/LoginForm/LoginForm';

const RegistrationPage = () => {
  return <>
      <h2>Log in</h2>
      <LoginForm />
      <p>
        or <Link>Register account</Link>
      </p>
      <Toaster />
    </>;
};

export default RegistrationPage;
