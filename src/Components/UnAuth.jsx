import { Link } from "react-router-dom";
import unAuth from "../assets/unAuth.jpeg";
const UnAuth = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#4a4a4a]">
      <img src={unAuth} alt="Unauthorized Access" className="mb-4" />
      <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
      <Link
        to="/login"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      >
        Go to Login
      </Link>
    </div>
  );
};

export default UnAuth;
