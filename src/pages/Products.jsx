import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";

const Products = () => {
    const brand = useLoaderData();
    console.log(brand);
  return (
    <div className="grid grid-cols-3 p-6">
     {
        brand?.map(item => <ProductCard key={item._id} item={item}></ProductCard>)
     }
    </div>
  );
};

export default Products;
