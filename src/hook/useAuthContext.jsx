import { useContext } from "react";
import { AuthContext } from "../context";

const useAuthContext = () => {
  const contextHook = useContext(AuthContext);
  return contextHook;
};

export default useAuthContext;
