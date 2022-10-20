import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <section className="mt-[60px min-h-screen flex flex-col justify-center items-center">
      <h3>this is the login page - TBD</h3>
      <Link className="block text-black w-max p-4 bg-lime-400" to="/">
        Go Back to Home Page
      </Link>
    </section>
  );
};

export default Login;
