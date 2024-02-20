/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ProductCard = ({item}) => {

   const {_id,brand,image,name,price,rating,description} =item;


    return(
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h1>{name}</h1>
    <h2 className="card-title">Brand: {brand}</h2>
    <p>Price: {price}$</p>
    <div className="card-actions justify-end">
     <Link to={`/products/${brand}/${_id}`}>
     <button className="btn btn-primary">Buy Now</button>
     </Link>
    </div>
  </div>
</div>
    )}
export default ProductCard;