import Title from "../Title/Title";
import Card from "./Card";

const Categories = ({ data }) => {
  return (
    <>
      <Title>All Categories</Title>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 py-10 gap-10 px-4 lg:px-0">
        {data?.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </div>
    </>
  );
};
export default Categories;
