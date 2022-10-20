import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const Navbar = () => {
  return (
    <motion.header
      initial={{ y: '-80px' }}
      animate={{ y: 0, transition: { duration: 0.5 } }}
      exit={{ y: '-80px' }}
      className="h-[48px] absolute top-0 left-0 right-0 shadow-md px-4"
    >
      <nav className="h-[100%] w-[100%]">
        <ul className="h-[100%] w-[100%] flex justify-between items-center">
          <li className="font-bold block">
            <Link to="/">homiTest</Link>
          </li>
          <li className="block">
            <Link className="p-10 " to="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
