import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Mobilenav = ({ handleNav }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center md:hidden"
    >
      <motion.nav
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="bg-white rounded-md py-20 px-10 w-3/4 shadow-lg"
      >
        <ul className="flex flex-col items-center gap-8 text-black font-semibold text-lg">
          <li onClick={handleNav} className="hover:text-gray-500 duration-300">
            <NavLink className={({isActive})=> isActive ? "text-text_gold font-quicksand" : "text-black font-quicksand"} to="/">Home</NavLink>
          </li>
          <li onClick={handleNav} className="hover:text-gray-500 duration-300">
            <NavLink className={({isActive})=> isActive ? "text-text_gold font-quicksand" : "text-black font-quicksand"} to="/about">About</NavLink>
          </li>
          <li onClick={handleNav} className="hover:text-gray-500 duration-300">
            <NavLink className={({isActive})=> isActive ? "text-text_gold font-quicksand" : "text-black font-quicksand"} to="/gallery">Film Page</NavLink>
          </li>
          <li onClick={handleNav} className="hover:text-gray-500 duration-300">
            <NavLink className={({isActive})=> isActive ? "text-text_gold font-quicksand" : "text-black font-quicksand"} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </motion.nav>
    </motion.div>
  );
};

Mobilenav.propTypes = {
  handleNav: PropTypes.func,
};

export default Mobilenav;
