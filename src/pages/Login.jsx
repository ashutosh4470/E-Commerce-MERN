import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username && password) {
      try {
        const res = await fetch(
          "https://my-app-7912d-default-rtdb.firebaseio.com/userDataReacords.json"
        );
        const data = await res.json();
        const users = Object.values(data);
        const foundUser = users.find(
          (user) => user.userName === username && user.passWord === password
        );
        if (foundUser) {
          alert("Login successful");
          window.location.href = "http://localhost:3000";
        } else {
          alert("Invalid username or password");

        }
      } catch (error) {
        console.log(error);
        alert("An error occurred while logging in");
      }
    } else {
      alert("Please fill in all the fields");
    }
  };

  return (
    <div className="flex justify-center items-start h-[90%]">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/3">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
          <Link
          to={'/forget'} className="text-blue-600">Forget Password ?</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
