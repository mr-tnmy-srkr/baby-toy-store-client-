import { AiFillStar } from "react-icons/ai";
import { useLoaderData, useNavigate } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { toast } from "react-toastify";
import Title from "../components/Title/Title";
const SingleProducts = () => {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    fetch("https://baby-toy-store-server-job-task.vercel.app/addToCart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);

        if (data.insertedId) {
          toast.success("Product added to cart successfully");
          navigate("/myCart");
        }
      })
      .catch((error) => toast.error(error));
  };

  return (
    <>
      <div className="pl-2 pt-5">
        <Title>View Product Details</Title>
        <h1 className=" bg-green-500 max-w-max px-2 rounded-xl text-xl font-bold text-white py-1">
          Brand : <span className="capitalize">{data.brand}</span>
        </h1>
      </div>
      <div className="card card-side bg-base-100 shadow-xl flex-col md:flex-row items-center justify-center dark:bg-gray-500 dark:text-gray-100">
        <figure className="flex-1 mx-auto md:w-full">
          <img
            className="h-96 object-contain p-4"
            src={data.image}
            alt={`${name}`}
          />
        </figure>
        <div className="card-body flex-1">
          <div className="space-y-3">
            <h2 className="card-title text-4xl font-semibold">{name}</h2>

            <p className="text-2xl font-medium">Price : {data.price}</p>

            <div>
              <StarRatings
                rating={parseFloat(data.rating)}
                starRatedColor="blue"
                numberOfStars={6}
                name="rating"
                starDimension="20px"
                starSpacing="5px"
              />
              <span className="btn btn-sm bg-green-500 text-white ml-3 border-0">
                {data.rating}
                <span className="text-white">
                  <AiFillStar></AiFillStar>
                </span>
              </span>
            </div>
            <p className="text-lg">{data.description}</p>
          </div>
          <div className=" ">
            <div className="flex">
              <button
                data-aos="flip-right"
                onClick={() => navigate(-1)}
                className="btn  bg-emerald-700  capitalize text-white mr-4 border-0 hover:bg-green-400"
              >
                Go Back
              </button>
              <button
                data-aos="flip-left"
                onClick={() => handleAddToCart()}
                className="btn btn-primary capitalize bg-emerald-700 text-white border-none rounded-md hover:bg-[#b5d578] focus:outline-none focus:bg-green-600 hover:bg-green-400"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SingleProducts;
