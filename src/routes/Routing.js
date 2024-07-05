import { Route, Routes } from "react-router-dom";
import { useRoutes } from "../hooks/useRoutes";
import PlainLayout from "../layout/PlainLayout";
import Page404 from "../container/Page404";

const Routing = () => {
  const { plainLayoutRoutes } = useRoutes();

  return (
    <Routes>
      <Route path={"/"} element={<PlainLayout />}>
        {plainLayoutRoutes.map(({ id: key, ...otherData }, index) => (
          <Route index key={`plane_${index}`} {...otherData} />
        ))}
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};

export default Routing;
