import axios from "axios";
import { toast } from "react-toastify";

const AddProducts = () => {
  const handleSaveToDb = async (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const image = form.image.value;
    const name = form.name.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const description = form.description.value;

    const newProduct = { brand, image, name, price, rating, description };
    console.log(newProduct);
    try {
      const response = await axios.post(
        "http://localhost:5000/addProducts",
        newProduct,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(response.data.insertedId);
      if (response.data.insertedId) {
        toast.success("Product added successfully");
        form.reset();
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="pb-8 dark:bg-gray-600 dark:text-gray-100">
      <title>Add products</title>
      <h1 className="py-8 text-center text-3xl font-semibold">
        Add Your Available Brands
      </h1>
      <section className="max-w-4xl p-6 mx-auto  rounded-md shadow-md bg-gray-300">
        <form onSubmit={handleSaveToDb}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2 ">
            <div>
              <label className="label ">
                <span className="label-text text-xl font-semibold">
                  Brand Name
                </span>
              </label>
              {/*  <input
               name="brand"
                type="text"
                className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                autoComplete="on"
              /> */}

              <select
                name="brand"
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
                className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                autoComplete="on"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Price</span>
              </label>
              <input
                name="price"
                type="number"
                min="0"
                className="block w-full px-4 py-2 mt-2   border border-gray-200 rounded-md dark:bg-gray-200 dark:text-black dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                required
                autoComplete="on"
              />
            </div>

            <div>
              <label className="label">
                <span className="label-text text-xl font-semibold">Rating</span>
              </label>
              <input
                name="rating"
                type="number"
                min="0"
                max="6"
                step="0.1"
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
                autoComplete="on"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-[#95BF46]  rounded-md hover:bg-[#b5d578] focus:outline-none focus:bg-green-600">
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddProducts;
