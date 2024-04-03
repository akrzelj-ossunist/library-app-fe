import React, { useState } from "react";
import { useRoutes, Link } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import { ILoginCredentials } from "./util/interface";

const App: React.FC = () => {
  const [loginCredentials, setLoginCredentials] = useState<ILoginCredentials>({
    user: "",
    jwtToken: ""
  });
  const routes = useRoutes([
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/registration",
      element: <Registration />
    }
  ])
  return <div className="">
    <p className="m-4 text-4xl font-bold">App start</p>
    <div className="flex">
      <Link to="/"><button className="m-4 px-4 w-auto h-10 rounded-md bg-blue-700 text-white font-bold text-lg">Home</button></Link>
      <Link to="/login"><button className="m-4 px-4 w-auto h-10 rounded-md bg-blue-700 text-white font-bold text-lg">Login</button></Link>
      <Link to="/registration"><button className="m-4 px-4 w-auto h-10 rounded-md bg-blue-700 text-white font-bold text-lg">Registration</button></Link>
    </div>
    {routes}
  </div>
}

export default App;
