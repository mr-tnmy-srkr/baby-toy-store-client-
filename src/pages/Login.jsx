import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../hook";
import SocialLogin from "./SocialLogin";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { loading, userLogin } = useAuthContext();

  const location = useLocation();
  // console.log(location.state);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    // console.log(form);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(email,password);

    userLogin(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        toast.success("User Login successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  const inputClass =
    "w-full border p-3 rounded bg-white  focus:outline-none focus:ring focus:border-blue-300";
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
                placeholder="Enter your email"
                className={inputClass}
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
                placeholder="Enter your password"
                className={inputClass}
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
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
              {loading ? "Please wait..." : "Login"}
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

          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
