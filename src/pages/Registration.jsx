import { useState } from "react";
const Registration = () => {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    passWord: "",
  });

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUserData({ ...userData, [name]: value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const { userName, email, passWord } = userData;
    if(userName && email && passWord){
    const res = await fetch(
      "https://my-app-7912d-default-rtdb.firebaseio.com/userDataReacords.json",
      {
        method: "POST",
        headers: {
          // <-- Corrected the property name to lowercase "headers"
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
          passWord,
        }),
      }
    );
    if (res) {
      setUserData({
        userName: "",
        email: "",
        passWord: "",
      });
      alert("Data Stored Successfully");
      window.location.href = "http://localhost:3000/login";

    } else {
      alert("Please fill the Data");
    }
    } else {
      alert("Please fill the Data");
    }
  
  };

  return (
    <div>
      <div className="max-w-xl mx-auto py-12">
        <h1 className="text-3xl font-bold mb-8">Register</h1>
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              name="userName"
              type="text"
              placeholder="Username"
              value={userData.userName}
              onChange={postUserData}
            />
          </div>
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
              name="email"
              type="email"
              placeholder="Email"
              value={userData.email}
              onChange={postUserData}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="passWord"
              placeholder="********"
              value={userData.passWord}
              onChange={postUserData}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="confirm-password"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="confirm-password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 ml-52 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onClick={submitData}
            >
              Register
            </button>
          </div>
          <a href="login" classname="text-pink-600">
            Already Have an Account?
          </a>
        </form>
      </div>
    </div>
  );
};
export default Registration;
