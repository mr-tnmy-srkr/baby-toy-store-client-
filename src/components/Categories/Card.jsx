import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { brand_name, brand_image } = item || {};

  return (
    <>
      <Link to={`/products/${brand_name}`}>
        <div className="relative bg-base-100 shadow-xl rounded-2xl">
          <img
            className="w-full h-64 object-cover rounded-xl hero-overlay"
            src={brand_image}
            alt=""
          />
          <h1 className="text-xl font-bold absolute bottom-0 left-0 right-0 p-4 bg-black text-white text-center opacity-80 capitalize rounded-xl">
            {brand_name}
          </h1>
        </div>
      </Link>
    </>
  );
};

export default Card;
