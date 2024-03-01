import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  const { _id, brand, image, name, price, rating, description } = item;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body ">
        <h1 className="text-xl font-semibold">{name}</h1>
        <h2 className="card-title bg-emerald-300 max-w-max px-4 rounded-lg">
          Brand: <span className="capitalize">{brand}</span>
        </h2>
        <p className="text-lg font-bold">Price : Rs.{price}</p>
        <div className="card-actions justify-end">
          <Link to={`/products/${brand}/${_id}`}>
            <button className="btn btn-primary bg-emerald-700 text-white hover:bg-green-400 border-0">
              View Details
            </button>
          </Link>
          <Link to={`/update-products/${brand}/${_id}`}>
            <button className="btn btn-primary bg-emerald-700 text-white hover:bg-green-400 border-0">
              Update Details
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
