import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PlainLayout = () => {
  const token = useSelector((state) => state?.auth?.user?.token);
  return token ? <Navigate to="/" /> : <Outlet />;
};

export default PlainLayout;
