import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return <>
      <h2>Register</h2>
      <RegistrationForm />
      <p>
        or <Link to="/login">Log in</Link>
      </p>
      <Toaster />
    </>;
};

export default RegistrationPage;