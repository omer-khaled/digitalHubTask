import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorName, setNameError] = useState("");
  const [errorPassword, setPasswordError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    let validateUserName = !/^[a-zA-Z0-9]{3,15}$/.test(username);
    let validatePassword =
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&]).{6,20}$/.test(password);
    if (validateUserName) {
      setNameError(
        "Username must be 3-15 characters and contain only letters and numbers."
      );
    }

    if (validatePassword) {
      setPasswordError(
        "Password must be 6-20 characters long and contain at least one uppercase letter, one lowercase letter, and one number."
      );
    }

    if (validateUserName || validatePassword) {
      return;
    }

    dispatch(login());

    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-md shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onMouseDown={() => setNameError("")}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        {errorName && (
          <p className="text-red-500 mt-1 mb-2 text-sosm">{errorName}</p>
        )}
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onMouseDown={() => setPasswordError("")}
            className="border border-gray-300 p-2 w-full rounded"
            required
          />
        </div>
        {errorPassword && (
          <p className="text-red-500 mt-1 mb-2 text-sosm">{errorPassword}</p>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
