import { houseDatatype } from '../types/houseDataType';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Card = ({
  media,
  listing_id,
  suburb,
  list_type,
  price,
}: houseDatatype) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col justify-center items center gap-2 md:max-w-[362px] card-shadow"
    >
      <div className="relative">
        <Link className="absolute inset-0" to={`/houses/${listing_id}`} />
        <img src={media} alt="house" />
      </div>

      <div className="flex flex-col justify-center items-center gap-2 border-radius-05rem p-5">
        <h2 className="text-center">{listing_id}</h2>
        <p className="text-center">Location:{suburb}</p>
        <p className="text-center">Type:{list_type}</p>
        <p className="text-center">&euro;{price}</p>
      </div>
    </motion.div>
  );
};

export default Card;
