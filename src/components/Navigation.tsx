import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext } from "./Layout";
import LibraryIcon from "../assets/LibraryIcon";

const Navigation: React.FC = () => {
  const { loginCredentials, setLoginCredentials } = useContext(LoginContext);

  const handleLogout = () => {
    setLoginCredentials({ user: "", jwtToken: "", authority: "" });
    localStorage.removeItem("jwt");
  };

  return (
    <nav className="flex justify-between items-center border-b-[1px] shadow-lg bg-white">
      <Link to="/home" className="flex items-center mx-4">
        <LibraryIcon />
        <p className="font-bold text-2xl mx-2">EDUCA LIBRARY</p>
      </Link>
      <div className="flex">
        {!loginCredentials.jwtToken && (
          <>
            <Link to="/login">
              <button className="m-4 px-4 w-auto h-10 rounded-md bg-blue-700 text-white font-bold text-lg">
                Login
              </button>
            </Link>
          </>
        )}
        {loginCredentials.jwtToken && (
          <>
            <button
              className="m-4 px-4 w-auto h-10 rounded-md bg-blue-700 text-white font-bold text-lg"
              onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
