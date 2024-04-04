import { IRegisterForm } from "../util/interface";
import { userRegister } from "../services/userRegister";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Form, Field, Formik } from "formik";

const Registration: React.FC = () => {
  const navigate = useNavigate();

  const register: IRegisterForm = {
    fullName: "",
    email: "",
    emailRepeat: "",
    password: "",
    passwordRepeat: "",
    address: "",
    birthday: new Date(),
  };

  const registerSchema = yup.object().shape({
    fullName: yup
      .string()
      .min(2, "Username to short!")
      .max(20, "Username to long!")
      .required("You need to enter username!"),
    password: yup
      .string()
      .min(8, "Password must contain minimum of 8 characters")
      .required("You need to enter password!"),
    passwordRepeat: yup
      .string()
      .oneOf([yup.ref("password")], "Password must match"),
    email: yup
      .string()
      .email("Invalid email")
      .required("You must input email!"),
    emailRepeat: yup.string().oneOf([yup.ref("email")], "Email must match!"),
    address: yup
      .string()
      .min(5, "Address to short!")
      .max(30, "Address to long!")
      .required("You need to enter address!"),
    birthday: yup.date().required("You need to fill this box"),
  });

  const handleSubmit = async (values: IRegisterForm) => {
    const response = userRegister(values);
    console.log(await response);
    navigate("/login");
  };

  return (
    <div>
      <p className="m-5 font-bold text-3xl">This is Registration Page</p>
      <Formik
        initialValues={register}
        validationSchema={registerSchema}
        onSubmit={(values, actions) => {
          actions.setSubmitting(false);
          handleSubmit(values);
        }}
      >
        {({ errors, touched }) => {
          return (
            <Form className="my-10 w-[520px] tablet:w-full m-5">
              <div className="mb-10 flex flex-col w-full">
                <label>Full name:</label>
                <Field
                  className="border-b-2 border-black p-2 text-lg focus:outline-none"
                  type="text"
                  name="fullName"
                />
                {errors.fullName && touched.fullName && (
                  <label className="text-sm text-red-500 font-bold">
                    {errors.fullName}
                  </label>
                )}
              </div>
              <div className="flex tablet:flex-col w-full justify-between">
                <div className="flex flex-col mb-10 desktop:mr-10">
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
                <div className="flex flex-col mb-10">
                  <label>Repeat password: </label>
                  <Field
                    className="border-b-2 border-black p-2 text-lg focus:outline-none"
                    type="password"
                    name="passwordRepeat"
                  />
                  {errors.passwordRepeat && touched.passwordRepeat && (
                    <label className="text-sm text-red-500 font-bold">
                      {errors.passwordRepeat}
                    </label>
                  )}
                </div>
              </div>
              <div className="flex tablet:flex-col justify-between">
                <div className="flex flex-col mb-10 desktop:mr-10">
                  <label>Email: </label>
                  <Field
                    className="border-b-2 border-black p-2 text-lg focus:outline-none"
                    type="email"
                    name="email"
                  />
                  {errors.email && touched.email && (
                    <label className="text-sm text-red-500 font-bold">
                      {errors.email}
                    </label>
                  )}
                </div>
                <div className="flex flex-col mb-10">
                  <label>Repeat email: </label>
                  <Field
                    className="border-b-2 border-black p-2 text-lg focus:outline-none"
                    type="email"
                    name="emailRepeat"
                  />
                  {errors.emailRepeat && touched.emailRepeat && (
                    <label className="text-sm text-red-500 font-bold">
                      {errors.emailRepeat}
                    </label>
                  )}
                </div>
              </div>
              <div className="mb-10 flex flex-col w-full">
                <label>Address:</label>
                <Field
                  className="border-b-2 border-black p-2 text-lg focus:outline-none"
                  type="text"
                  name="address"
                />
                {errors.address && touched.address && (
                  <label className="text-sm text-red-500 font-bold">
                    {errors.address}
                  </label>
                )}
              </div>
              <div className="flex flex-col mb-10 desktop:mr-10">
                <label>Birthday: </label>
                <Field
                  className="border-b-2 border-black p-2 text-lg focus:outline-none"
                  type="date"
                  name="birthday"
                />
                {errors.birthday && touched.birthday && (
                  <label className="text-sm text-red-500 font-bold">
                    You need to fill this box!
                  </label>
                )}
              </div>
              <button
                type="submit"
                className="text-white cursor-pointer font-bold w-[70%] rounded-xl text-2xl bg-blue-500 py-3 active:bg-blue-300 shadow-lg"
              >
                Register
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default Registration;
