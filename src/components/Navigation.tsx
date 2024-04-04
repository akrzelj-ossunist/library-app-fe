import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./Layout";

const Navigation: React.FC = () => {
  const { loginCredentials, setLoginCredentials } = useContext(LoginContext);

  const handleLogout = () => {
    setLoginCredentials({ user: "", jwtToken: "", authority: "" });
    localStorage.removeItem("jwt");
  };

  return (
    <nav>
      <div className="flex">
        {!loginCredentials.jwtToken && (
          <>
            <Link to="/login">
              <button className="m-4 px-4 w-auto h-10 rounded-md bg-blue-700 text-white font-bold text-lg">
                Login
              </button>
            </Link>
            <Link to="/registration">
              <button className="m-4 px-4 w-auto h-10 rounded-md bg-blue-700 text-white font-bold text-lg">
                Registration
              </button>
            </Link>
          </>
        )}
        {loginCredentials.jwtToken && (
          <>
            <Link to="/home">
              <button className="m-4 px-4 w-auto h-10 rounded-md bg-blue-700 text-white font-bold text-lg">
                Home
              </button>
            </Link>
            <button
              className="m-4 px-4 w-auto h-10 rounded-md bg-blue-700 text-white font-bold text-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
