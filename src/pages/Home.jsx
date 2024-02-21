import { useLoaderData } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Banner from "../components/Header/Banner";

const Home = () => {
const data = useLoaderData();
console.log(data);

  return (
    <div>
          <Banner/>
          <Categories  data={data}/>
    </div>
  );
};
export default Home;
