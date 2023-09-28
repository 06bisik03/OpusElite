import React, { useEffect, useState } from "react";
import styles from "./Profile.module.css"; // Import your CSS module
import SignForm from "./SignForm";
import UserProfile from "./UserProfile";

import Navbar from "../UI/Navbar";
import UseCheckLog from "../Hooks/UseCheckLog";
import Loader from "../UI/Loader";

const Profile = () => {
  const [userLogged, setUserLogged] = useState("_");



  useEffect(() => {
    const checkLogState =async () => {
        const loggedUser =  await UseCheckLog();
        setUserLogged(loggedUser?.data);
      }
    checkLogState();
  }, []);
  if (userLogged) {
    return (
      <div className={styles.profileContainer1}>
        <Navbar /> <UserProfile setUserLogged={setUserLogged} userData={userLogged}/>
      </div>
    );
  } else if(userLogged !== null) {
    return (
      <div className={styles.profileContainer}>
        <Navbar />
        <SignForm />
      </div>
    );
  } else {
    return <Loader />
  }
};

export default Profile;
