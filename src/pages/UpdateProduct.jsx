// import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateMyProduct = () => {
  const product = useLoaderData();
  // console.log(product);
  const { _id, brand, image, name, price, rating, description } = product || {};

  const navigate = useNavigate();

  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const image = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const updatedProduct = {
      brand,
      image,
      name,
      price,
      rating,
      description,
    };

    try {
      const response = await fetch(
        `https://baby-toy-store-server-job-task.vercel.app/product/updateProduct/${brand}/${_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedProduct),
        }
      );
      const result = await response.json();
      // console.log(result);

      if (result.acknowledged) {
        toast.success("Product updated successfully");
        navigate(-1);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="dark:bg-gray-600 dark:text-gray-100">
      <div className="pb-8">
        <h1 className="py-8 text-center text-3xl font-semibold">
          Update Your Product
        </h1>
        <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-gray-300">
          <form onSubmit={handleUpdateProduct}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
              <div>
                <label className="label ">
                  <span className="label-text text-xl font-semibold">
                    Brand Name
                  </span>
                </label>

                <select
                  name="brand"
                  defaultValue={brand}
                  className="block w-full px-4 py-2 mt-2 border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                >
                  <option value="">Select a category</option>
                  <option value="magic">Magic Cars</option>
                  <option value="guns">Guns</option>
                  <option value="tricycle">Tricycle</option>
                  <option value="bubbles">Bubbles</option>
                  <option value="educational">Educational</option>
                  <option value="kitchen">Kitchen Sets</option>
                </select>
              </div>
              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Image url
                  </span>
                </label>
                <input
                  name="image"
                  type="text"
                  defaultValue={image}
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  autoComplete="on"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  defaultValue={name}
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  autoComplete="on"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Price
                  </span>
                </label>
                <input
                  name="price"
                  type="number"
                  min="0"
                  defaultValue={price}
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  autoComplete="on"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Rating
                  </span>
                </label>
                <input
                  name="rating"
                  type="number"
                  min="0"
                  max="6"
                  step="0.1"
                  defaultValue={rating}
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  autoComplete="on"
                />
              </div>

              <div>
                <label className="label">
                  <span className="label-text text-xl font-semibold">
                    Description
                  </span>
                </label>
                <textarea
                  className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                  required
                  name="description"
                  defaultValue={description}
                  autoComplete="on"
                />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 bg-emerald-700 text-white transition-colors duration-300 transform     rounded-md hover:bg-[#b5d578] focus:outline-none focus:bg-green-600 ">
                Update Product
              </button>
            </div>
          </form>
          <h2 className="text-xl inline font-semibold  dark:text-black">
            Go back to previous page
          </h2>

          <span className="ml-3" onClick={() => navigate(-1)}>
            <button className="btn bg-emerald-700 text-white capitalize btn-sm">
              Click Here
            </button>
          </span>
        </section>
      </div>
    </div>
  );
};

export default UpdateMyProduct;
