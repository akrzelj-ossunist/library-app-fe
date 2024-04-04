import { useState, createContext } from "react";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { ILoginCredentials } from "../util/interface";
import decodeJwtToken from "../util/jwtToken";

export const LoginContext = createContext<{
  loginCredentials: ILoginCredentials;
  setLoginCredentials: React.Dispatch<React.SetStateAction<ILoginCredentials>>;
}>({
  loginCredentials: {
    authority: "",
    user: "",
    jwtToken: ""
  },
  setLoginCredentials: () => {}
});

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const jwtToken = localStorage.getItem("jwt") || "";
  const [loginCredentials, setLoginCredentials] = useState<ILoginCredentials>({
    authority: decodeJwtToken(jwtToken)?.scope || "",
    user: decodeJwtToken(jwtToken)?.sub || "",
    jwtToken: jwtToken
  });

  return (
    <LoginContext.Provider value={{ loginCredentials, setLoginCredentials }}>
      <Navigation />
      {children}
      <Footer />
    </LoginContext.Provider>
  );
};

export default Layout;
