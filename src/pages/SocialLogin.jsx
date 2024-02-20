import { GrFacebook } from "react-icons/gr";
import { ImGoogle3 } from "react-icons/im";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthContext } from "../hook";

const SocialLogin = () => {
  const { googleSignIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSocialLogin = (media) => {
    media()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("SignIn successful");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  return (
    <div>
      <div className="flex gap-4 lg:gap-0 lg:flex-row flex-col justify-center mt-8 w-full">
        <button
          onClick={() => handleSocialLogin(googleSignIn)}
          className="flex-1 bg-red-500 text-white px-6 py-2 rounded-full mr-2 hover:bg-red-600 "
        >
          <p className="flex items-center justify-center gap-3">
            <span>Continue With </span>
            <span>
              <ImGoogle3 />
            </span>
          </p>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
