import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ILoginForm } from "../util/interface";
import { userLogin } from "../services/userLogin";
import decodeJwtToken from "../util/jwtToken";
import { LoginContext } from "../components/Layout";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";

const Login: React.FC = () => {
  const { loginCredentials, setLoginCredentials } = useContext(LoginContext);
  const navigate = useNavigate();
  const login: ILoginForm = {
    email: "",
    password: "",
  };

  const loginSchema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid email")
      .required("You must input email!"),
    password: yup
      .string()
      .min(8, "Password must contain minimum of 8 characters")
      .required("You need to enter password!"),
  });

  useEffect(() => {
    if (loginCredentials.jwtToken !== "") {
      navigate("/home");
    }
  }, [loginCredentials.jwtToken]);

  const handleSubmit = async (loginForm: ILoginForm) => {
    const response = userLogin(loginForm);
    const decodedToken = decodeJwtToken(await response);
    const jwtToken = await response;
    setLoginCredentials({
      authority: decodedToken?.scope,
      user: decodedToken?.sub,
      jwtToken: jwtToken,
    });
    localStorage.setItem("jwt", jwtToken);
  };

  return (
    <div>
      <p className="m-5 font-bold text-3xl">This is Login Page</p>
      <Formik
        initialValues={login}
        validationSchema={loginSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form className="my-10 w-[400px] phone:w-[300px] m-5">
              <div className="mb-10 flex flex-col">
                <label>Email:</label>
                <Field
                  className="border-b-2 border-black p-2 text-lg focus:outline-none"
                  type="text"
                  name="email"
                />
                {errors.email && touched.email && (
                  <label className="text-sm text-red-500 font-bold">
                    {errors.email}
                  </label>
                )}
              </div>
              <div className="flex flex-col mb-10">
                <label>Password: </label>
                <Field
                  className="border-b-2 border-black p-2 text-lg focus:outline-none"
                  type="password"
                  name="password"
                />
                {errors.password && touched.password && (
                  <label className="text-sm text-red-500 font-bold">
                    {errors.password}
                  </label>
                )}
              </div>
              <button
                type="submit"
                className="text-white cursor-pointer font-bold w-[200px] rounded-xl text-2xl bg-blue-500 py-3 active:bg-blue-300 shadow-lg"
              >
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Login;
