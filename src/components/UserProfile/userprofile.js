import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import css from "./userprofile.module.css"

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className ={css.Profile}>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;