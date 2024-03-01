import { useLoaderData } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import Title from "../components/Title/Title";

const Products = () => {
  const brand = useLoaderData();

  return (
    <>
      <Title>Product by category</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto p-6">
        {brand?.map((item) => (
          <ProductCard key={item._id} item={item}></ProductCard>
        ))}
      </div>
    </>
  );
};

export default Products;
