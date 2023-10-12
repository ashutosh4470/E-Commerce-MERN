import { useState } from "react";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetSuccessful, setResetSuccessful] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    
};

  const handleResetPassword = async (e) => {
    e.preventDefault();
    // Add code here to update the user's password
    // using your preferred authentication system or API

    // For demonstration purposes, we'll assume the password update was successful
    setResetSuccessful(true);
  };

  return (
    <div className="max-w-xl mx-auto py-12">
      <h1 className="text-3xl font-bold mb-8">Reset Password</h1>
      {resetSuccessful ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          Password reset successful.
        </div>
      ) : (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              New Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="New Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={handleResetPassword}
            >
              Update Password
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
