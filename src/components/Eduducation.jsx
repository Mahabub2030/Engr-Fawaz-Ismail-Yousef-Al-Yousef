// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import Resume from "./Resume";

// import './styles.css';

// import required modules

const Eduducation = () => {
  return (
    <div className="py-10 bg-gray-100 relative" id="education">
      <h1 className="text-center text-2xl lg:text-4xl font-bold">
       Academic Background & Skills
      </h1>
      <Resume />
    </div>
  );
};

export default Eduducation;
