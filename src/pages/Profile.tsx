import { useContext } from "react";
import { LoginContext } from "../components/Layout";

const Profile: React.FC = () => {
  const { loginCredentials } = useContext(LoginContext);
  const { user } = loginCredentials;

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Full Name
          </label>
          <p>{user.fullName}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <p>{user.email}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Address
          </label>
          <p>{user.address}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Birthday
          </label>
          <p>{user.birthday.toString()}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Role
          </label>
          <p>{user.role}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
