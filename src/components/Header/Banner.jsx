import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import bannerAnimation from "../../assets/animation/Animation - 1708587191971.json";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100">
      <div className=" flex flex-col-reverse justify-center  mx-auto  lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-3xl lg:text-5xl font-bold leadi">
            Buy A<span className="text-emerald-700  px-3">Beautiful</span>
            Toy
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            Dictum aliquam porta in condimentum ac integer
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <button
              rel="noopener noreferrer"
              href="#"
              className="px-8 py-3 text-lg font-semibold rounded text-white dark:bg-emerald-700 bg-emerald-700"
              onClick={() => navigate("/products/guns")}
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0">
          <Lottie animationData={bannerAnimation} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default Banner;
