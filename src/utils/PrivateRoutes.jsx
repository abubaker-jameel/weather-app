import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectUser } from "../features/userSlice";

const PrivateRoutes = () => {
  const user = useSelector(selectUser);
  return user ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoutes;
