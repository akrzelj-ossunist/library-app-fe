import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./Layout";

const Home: React.FC = () => {
  const { loginCredentials } = useContext(LoginContext);
  const navigate = useNavigate();

  useEffect(() => {
    loginCredentials.jwtToken === "" && navigate("/login");
  }, [loginCredentials.jwtToken]);

  return (
    <>
      <p className="m-4 text-4xl font-bold">Home app</p>
      <p className="m-4 text-2xl font-bold">Welcome {loginCredentials.user}!</p>
    </>
  );
};

export default Home;
