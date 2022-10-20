import { v4 as uuidv4 } from 'uuid';
import Card from './Card';
import { motion } from 'framer-motion';
import { useHouseContext } from '../hooks/useHouseContext';

const Home = () => {
  const data = useHouseContext();
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5 } }}
      exit={{ opacity: 0 }}
      className="min-h-100vh mt-[60px]"
    >
      <motion.main
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        className="md:container mx-auto flex flex-col
       items-center justify-center md:grid md:grid-cols-3  lg:grid-cols-4 gap-4 px-4"
      >
        {data && data.map((house) => <Card key={uuidv4()} {...house} />)}
      </motion.main>
    </motion.section>
  );
};

export default Home;
