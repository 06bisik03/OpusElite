import { useEffect, useState } from "react";

import styles from "./ProfileSub.module.css";
import UseCheckLog from "../Hooks/UseCheckLog";
import { CountryDropdown } from "react-country-region-selector";
import UseChangeUserData from "../Hooks/UseChangeUserData";
import Loader from "../UI/Loader";

const ProfileSub = () => {
  const [userData, setUserData] = useState(null);
  const [editOn, setEditOn] = useState(false);

  const [selectedOptionSex, setSelectedOptionSex] = useState("");
  const [selectedOptionCountry, setSelectedOptionCountry] = useState("");
  useEffect(() => {
    const loadPageData = async () => {
      const logState = await UseCheckLog();
      setUserData(logState);
     
      if(logState.data.user_sex) {
        setSelectedOptionSex(logState.data.user_sex)
      }
      if(logState.data.user_country) {
        setSelectedOptionCountry(logState.data.user_country)
      }
    };
    loadPageData();
  }, []);

  const saveNewDataHandler = async (e) => {
    e.preventDefault();
    const newUserData = {
      new_email: e.target.elements.email.value,
      new_country: e.target.elements.country.value,
      new_sex : e.target.elements.sex.value , new_name:  e.target.elements.name.value,
    }
    setEditOn(false);
 await UseChangeUserData(newUserData, "profiledata");
    
  };
  if (userData) {
    return (
      <div className={styles.profileSubContainer}>
        <form className={styles.profileSub} onSubmit={saveNewDataHandler}>
          <div>WELCOME, {userData.data.user_name}</div>
          <div>
            <img alt="_"src={userData.data.user_picture} />
          </div>
          <div className={styles.profileDetails}>
            <div>
              <label htmlFor="name">Name</label>
              <input

                disabled={true}
                name="name"
                value={userData.data.user_name}
              />
            </div>

            <div>
              <label htmlFor="email">Email</label>
              <input
                disabled={true}
                name="email"
                value={userData.data.user_email}
              />
            </div>
            
            <div>
              <label htmlFor="country">Country</label>
              <CountryDropdown
              name="country"
                value={userData.data.user_country || selectedOptionCountry}
                
                onChange={(val) => setSelectedOptionCountry(val)}
                className={styles.customDrop}
                disabled={!editOn}
              />
            </div>
            <div>
              <label htmlFor="sex">Sex</label>
              <select
                name="sex"
                value={  selectedOptionSex}
                onChange={(e) => setSelectedOptionSex(e.target.value)}
                disabled={!editOn}>
                <option value="" disabled={editOn}>
                  Choose an option
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div>
              <label htmlFor="membership">Membership</label>
              <input
                disabled={true}
                name="membership"
                value={userData.data.user_sub.toUpperCase()}
              />
            </div>
          </div>
          <div className={styles.actions}>
            <button type="button"onClick={() => setEditOn(!editOn)}>Edit</button>
            <button type="submit" >Save</button>
          </div>
        </form>
      </div>
    );
  } else {
    return <Loader />
  }
};
export default ProfileSub;
