import { useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { LoginContext } from "./Layout";
import { ILoginForm } from "../util/interface";
import { userLogin } from "../services/userLogin";
import decodeJwtToken from "../util/jwtToken";

const Login: React.FC = () => {
    const { loginCredentials, setLoginCredentials } = useContext(LoginContext);
    const navigate = useNavigate();
    const [loginForm, setLoginForm] = useState<ILoginForm>({
        email: "",
        password: ""
    })

    useEffect(() => {
        if (loginCredentials.jwtToken !== "") {
            navigate("/home");
        }
    }, [loginCredentials.jwtToken]);

    useEffect(() => {

    }, [])

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = userLogin(loginForm);
        const decodedToken = decodeJwtToken(await response);
        const jwtToken = await response
        setLoginCredentials({ authority: decodedToken?.scope, user: decodedToken?.sub , jwtToken: jwtToken })
        localStorage.setItem("jwt", jwtToken);
    }

    return (
        <div>
            <p className="m-5 font-bold text-3xl">This is Login Page</p>
            <form onSubmit={handleSubmit} className="m-5">
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        className="border-b-[1px] border-b-black ml-2 mb-4"
                        type="email"
                        id="email"
                        value={loginForm.email}
                        onChange={(event) => setLoginForm({...loginForm, email: event.target.value})}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        className="border-b-[1px] border-b-black ml-2"
                        type="password"
                        id="password"
                        value={loginForm.password}
                        onChange={(event => setLoginForm({...loginForm, password: event.target.value}))}
                        required
                    />
                </div>
                <button type="submit" className="m-4 ml-0 px-6 w-auto h-9 rounded-md bg-green-400 text-white font-bold text-lg">Login</button>
            </form>
        </div>
    );
}

export default Login;
