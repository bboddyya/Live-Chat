import { Route, Routes, Navigate } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes/routes";
import { useContext } from "react";
import { Context } from "../context/contextAuth";

const AppRouter = () => {
  const { userData } = useContext(Context);
  return userData ? (
    <Routes>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} exact path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={"/chat"} />} />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={"/login"} />} />
    </Routes>
  );
};

export default AppRouter;
