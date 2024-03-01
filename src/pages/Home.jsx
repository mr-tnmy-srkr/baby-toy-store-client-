import { useLoaderData } from "react-router-dom";
import Categories from "../components/Categories/Categories";
import Banner from "../components/Header/Banner";
import Faq from "../components/Faq/Faq";
import Testimonial from "../components/Testimonial/Testimonial";
import Contact from "../components/Contact/Contact";
import Team from "../components/Team/Team";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      <Banner />
      <Categories data={data} />
      <Faq />
      <Testimonial />
      <Team />
      <Contact />
    </div>
  );
};
export default Home;
