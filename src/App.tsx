import React, { useContext, useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import { LoginContext } from "./components/Layout";
import Profile from "./pages/Profile";

const App: React.FC = () => {
  const { loginCredentials } = useContext(LoginContext);
  const navigate = useNavigate();
  const routes = useRoutes([
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/registration",
      element: <Registration />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  // useEffect(() => {
  //   loginCredentials.jwtToken !== "" ? navigate("/home") : navigate("/login");
  // }, [loginCredentials.jwtToken]);

  return <div>{routes}</div>;
};

export default App;
