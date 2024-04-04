import { useState } from "react";
import { IRegisterForm } from "../util/interface";
import { userRegister } from "../services/userRegister";
import { useNavigate } from "react-router-dom";

const Registration: React.FC = () => {
  const navigate = useNavigate();
  const [registrationForm, setRegistrationForm] = useState<IRegisterForm>({
    fullName: "",
    email: "",
    emailRepeat: "",
    password: "",
    passwordRepeat: "",
    address: "",
    birthday: new Date(),
  });
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (
      registrationForm.email === registrationForm.emailRepeat &&
      registrationForm.password === registrationForm.passwordRepeat
    ) {
      const response = userRegister(registrationForm);
      console.log(await response);
      navigate("/login");
    }
  };
  return (
    <div>
      <p className="m-5 font-bold text-3xl">This is Registration Page</p>
      <form onSubmit={handleSubmit} className="m-5 w-[500px]">
        <div>
          <label htmlFor="fullName">Full name:</label>
          <input
            className="border-b-[1px] border-b-black ml-2 mb-4"
            type="text"
            id="fullName"
            value={registrationForm.fullName}
            onChange={(event) =>
              setRegistrationForm({
                ...registrationForm,
                fullName: event.target.value,
              })
            }
            required
          />
        </div>
        <div className="flex justify-between w-full">
          <div>
            <label htmlFor="email">Email:</label>
            <input
              className="border-b-[1px] border-b-black ml-2 mb-4"
              type="email"
              id="email"
              value={registrationForm.email}
              onChange={(event) =>
                setRegistrationForm({
                  ...registrationForm,
                  email: event.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="emailRepeat">Repeat Email:</label>
            <input
              className="border-b-[1px] border-b-black ml-2 mb-4"
              type="email"
              id="emailRepeat"
              value={registrationForm.emailRepeat}
              onChange={(event) =>
                setRegistrationForm({
                  ...registrationForm,
                  emailRepeat: event.target.value,
                })
              }
              required
            />
          </div>
        </div>

        <div className="flex justify-between w-full">
          <div>
            <label htmlFor="password">Password:</label>
            <input
              className="border-b-[1px] border-b-black ml-2"
              type="password"
              id="password"
              value={registrationForm.password}
              onChange={(event) =>
                setRegistrationForm({
                  ...registrationForm,
                  password: event.target.value,
                })
              }
              required
            />
          </div>
          <div>
            <label htmlFor="passwordRepeat">Repeat Password:</label>
            <input
              className="border-b-[1px] border-b-black ml-2"
              type="password"
              id="passwordRepeat"
              value={registrationForm.passwordRepeat}
              onChange={(event) =>
                setRegistrationForm({
                  ...registrationForm,
                  passwordRepeat: event.target.value,
                })
              }
              required
            />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="address">Address:</label>
          <input
            className="border-b-[1px] border-b-black ml-2 mb-4"
            type="text"
            id="address"
            value={registrationForm.address}
            onChange={(event) =>
              setRegistrationForm({
                ...registrationForm,
                address: event.target.value,
              })
            }
            required
          />
        </div>
        <div>
          <label htmlFor="birthday">Birthday:</label>
          <input
            className="border-b-[1px] border-b-black ml-2 mb-4"
            type="date"
            id="birthday"
            onChange={(event) =>
              setRegistrationForm({
                ...registrationForm,
                birthday: new Date(event.target.value),
              })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="m-4 ml-0 px-6 w-auto h-9 rounded-md bg-green-400 text-white font-bold text-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Registration;
