import { useState } from "react";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../hook";
import SocialLogin from "./SocialLogin";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const { loading, createUser, updateUserProfile } = useAuthContext();

  const handleRegister = (e) => {
    e.preventDefault();
    //clear the error message
    setErrorMessage("");

    const form = new FormData(e.currentTarget);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const fullName = `${firstName} ${lastName}`;
    const email = form.get("email");
    const photoUrl = form.get("photoUrl");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");
    const accepted = form.get("terms") === "on";

    //password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters!");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setErrorMessage("Password should have at least one uppercase character!");
      return;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setErrorMessage("Password should have at least one special character!");
      return;
    } else if (!(password === confirmPassword)) {
      return setErrorMessage("Confirm password should be same as password!");
    } else if (!accepted) {
      setErrorMessage("Please accept our terms and conditions");
      return;
    }

    //user signup
    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        //update user profile
        updateUserProfile(fullName, photoUrl);
      })

      .then(() => {
        toast.success("User created successfully");
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        // console.log(errorCode, errorMessage);
        toast.error(errorMessage);
      });
  };
  const inputClass =
    "w-full border p-3 rounded bg-white  focus:outline-none focus:ring focus:border-blue-300";
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center dark:bg-gray-400 dark:text-black p-16">
        <div className="bg-transparent p-10 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold mb-6 text-center ">Sign Up</h2>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="firstName" className="block text-lg mb-2 ">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  className={inputClass}
                  required
                />
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="block text-lg mb-2 ">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  className={inputClass}
                  required
                />
              </div>
            </div>
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
            <div>
              <label htmlFor="email" className="block text-lg mb-2 ">
                Image Link:
              </label>
              <input
                type="photoUrl"
                id="photo_url"
                name="photoUrl"
                placeholder="Enter your photo URL"
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

            <div>
              <label htmlFor="confirmPassword" className="block text-lg mb-2 ">
                Confirm Password:
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="on"
                placeholder="Confirm your password"
                className={inputClass}
                required
              />
            </div>

            <p className="flex items-center">
              <input
                className="w-5 h-5"
                type="checkbox"
                name="terms"
                id="terms"
              />
              <label htmlFor="terms" className="ml-2">
                Please accept our
                <a href="#" className="text-blue-800 font-bold cursor-pointer">
                  T&C
                </a>
              </label>
            </p>

            {errorMessage && (
              <p className="text-red-600 font-bold">{errorMessage}</p>
            )}

            <button
              type="submit"
              className="w-full bg-[#95BF46] hover:bg-green-400 border-0 text-white py-3 rounded  focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
            >
              {loading ? "Please wait..." : "Signup"}
            </button>
          </form>

          <div className="mt-2 text-center">
            <p>
              Already have an account? please
              <Link
                to="/login"
                className="text-lg font-bold text-blue-700 ml-2"
              >
                Login
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

export default Signup;
