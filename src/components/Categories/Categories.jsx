/* eslint-disable react/prop-types */
import Card from "./Card";

const Categories = ({ data }) => {
  return (
    <div className="grid grid-cols-3 p-6 gap-6">
      {data?.map((item) => (
        <Card key={item._id} item={item}></Card>
      ))}
    </div>
  );
};
export default Categories;
