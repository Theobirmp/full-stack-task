import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="flex flex-col gap-10 items-center">
        <h3>The Page you are trying to find doesnt exist or has been moved</h3>
        <Link className="block text-black w-max p-4 bg-lime-400" to="/">
          Go Back to Home Page
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
