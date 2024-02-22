import { Bars } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { useAuthContext } from "../hook";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuthContext();
  const location = useLocation();
  // console.log(location.pathname);

  if (loading) {
    return (
      <div className="h-[90vh] flex justify-center items-center">
        <Bars
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="bars-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};
PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
  };
export default PrivateRoute;