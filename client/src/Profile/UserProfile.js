import { useState,useEffect } from "react";
import UseUserLogout from "../Hooks/UseUserLogout";
import styles from "./UserProfile.module.css";

import UseCheckLog from "../Hooks/UseCheckLog";

import ChosenSub from "./ChosenSub";
const UserProfile = ({ setUserLogged}) => {
  const [sub, setSub] = useState("Profile");
  const [userData,setUserData] = useState(null);
  useEffect(() => {
    const loadPageData = async() => {
        const logState = await UseCheckLog();
        setUserData(logState);
    }
    loadPageData();
},[])  
  const signUserOut = async () => {
    await UseUserLogout();
    setUserLogged(false);
  }

 if(userData && userData !== 401) {

  return (
    <div className={styles.userProfileContainer}>
      <div className={styles.userChoices}>
        <div className={styles.profilePic}>
          <img  alt="_"src={userData?.data.user_picture}/>
        </div>
        <div className={styles.prof}>
          <button
            onClick={() => setSub("Profile")}
            style={{
              color: sub === "Profile" ? "orange" : "black",
              fontSize: sub === "Profile" ? "16px" : "13px",
            }}>
            Profile
          </button>
          <button
            onClick={() => setSub("Favourites")}
            style={{
              color: sub === "Favourites" ? "orange" : "black",
              fontSize: sub === "Favourites" ? "16px" : "13px",
            }}>
            Favourites
          </button>
          <button
            onClick={() => setSub("PT")}
            style={{
              color: sub === "PT" ? "orange" : "black",
              fontSize: sub === "PT" ? "16px" : "13px",
            }}>
            Past Transactions
          </button>
          <button
            onClick={() => setSub("sub")}
            style={{
              color: sub === "sub" ? "orange" : "black",
              fontSize: sub === "sub" ? "16px" : "13px",
            }}>
            OpusElite Membership
          </button>
          <button onClick={signUserOut}>Sign out</button>
        </div>
      </div>

      <div className={styles.choiceResults}>
        <ChosenSub subMode={sub} userData={userData}/>
      </div>
    </div>
  );
          }
};
export default UserProfile;
