import { useContext } from "react";
import { UserContext } from "./UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {/* Display the user's profile information */}
      <h1>Welcome, {user.name}!</h1>
      {/* more profile information */}
    </div>
  );
};


export default Profile;