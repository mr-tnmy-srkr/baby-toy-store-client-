import axios from "axios";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyCart = () => {
  const cartItems = useLoaderData();
  const [updatedCart, SetUpdatedCart] = useState(cartItems);
  let total;
  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure to delete it?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://baby-toy-store-server-job-task.vercel.app/deleteCartItem/${id}`
          )
          .then((response) => {
            // console.log("Delete request successful:", response.data);

            if (response.data.deletedCount > 0) {
              toast.success("Product deleted form cart successfully");

              const filteredCart = updatedCart.filter(
                (item) => item._id !== id
              );
              // console.log(filteredCart);
              SetUpdatedCart(filteredCart);
            }
          })
          .catch((error) => {
            toast.error("Error deleting data:", error);
          });
      }
    });
  };

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Brand
              </th>

              <th scope="col" className="px-6 py-3">
                Price ($)
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {updatedCart?.map((item, idx) => ( */}
            {updatedCart &&
              updatedCart?.map((item, idx) => (
                <tr
                  key={item._id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {`${idx + 1}. ${item.data.name}`}
                  </th>
                  <td className="px-6 py-4">{item.data.brand}</td>
                  <td className="px-6 py-4">{item.data.price}</td>
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleDelete(item._id)}
                      type="submit"
                      className="dark:bg-white bg-red-500 p-2 rounded-lg font-medium text-white dark:text-red-500 hover:underline"
                    >
                      <AiFillDelete></AiFillDelete>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {!updatedCart.length ? (
        <div className="min-h-[60vh] flex justify-center items-center">
          <p className="text-2xl font-bold dark:text-white">
            Sorry your cart is empty
          </p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default MyCart;
