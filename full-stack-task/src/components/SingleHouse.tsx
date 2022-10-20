import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import NotFound from './NotFound';
import { motion } from 'framer-motion';
import { useHouseContext } from '../hooks/useHouseContext';
const SingleHouse = () => {
  const { id } = useParams<{ id: string }>();
  const data = useHouseContext();
  const house = data.filter((houseData) => houseData.listing_id == Number(id));
  return (
    <section className="mt-[60px] container mx-auto px-4">
      {house[0].floor ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col"
        >
          <Link to="/">Back To Listings</Link>
          <div className="flex flex-col md:flex-row  md:gap-3">
            <div className="max-w-[746px] aspect-square">
              <img className="h-[100%]" src={house[0].media} alt="house" />
            </div>
            <div>
              <p>Category: {house[0].property_category}</p>
              <p>Sub Category: {house[0].property_subcategory}</p>
              <p>Year Renovated: {house[0].renovation_year}</p>
            </div>
            <div className="flex flex-col gap-2 md:ml-auto p-5 card-shadow md:self-start md:w-[367px]">
              <div className="flex justify-between">
                <span>Price</span>
                <span>&euro;{house[0].price}</span>
              </div>
              <div className="flex justify-between">
                <span>Status</span>
                <span>{house[0].list_type}</span>
              </div>
              <div className="self-stretch">
                <button className="block  w-[100%] p-2  bg-[#fcd34d] hover:bg-[#f3be12] text-center">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <NotFound />
      )}
    </section>
  );
};

export default SingleHouse;
