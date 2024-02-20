import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Login = () => {
  return (
    <div className="">
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-500 dark:text-black ">
        <div className="bg-transparent p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-lg mb-2 ">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                //   value={email}
                placeholder="Enter your email"
                className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
            </div>
            <div className="relative">
              <label htmlFor="password" className="block text-lg mb-2 ">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                autoComplete="on"
                //   value={password}
                placeholder="Enter your password"
                className="w-full border p-3 rounded text-gray-800 focus:outline-none focus:ring focus:border-blue-300"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                // onMouseUp={() => setShowPassword(false)}
                // onMouseLeave={() => setShowPassword(false)}
                className="absolute bottom-3 right-3 cursor-pointer"
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={25} />
                ) : (
                  <BiShow size={25} />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-[#95BF46] hover:bg-green-400 border-0 text-white py-3 rounded  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              Login
            </button>
          </form>

          <div className="mt-2 text-center">
            <p>
              Don’t have an account? please
              <Link
                to="/signup"
                className="text-lg font-bold text-blue-700 ml-2"
              >
                SignUp
              </Link>
            </p>
          </div>
          <br />
          <div className="relative ">
            <div className="border-t border-gray-800 w-full absolute"></div>
            <div className="absolute -top-3 left-1/2 bg-white dark:bg-gray-500 px-4 transform -translate-x-1/2">
              or
            </div>
          </div>

          <SocialLogin></SocialLogin>
        </div>
      </div>
      <ToastContainer
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Login;
