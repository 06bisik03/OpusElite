import UseChangeUserData from "../Hooks/UseChangeUserData";
import UseCheckLog from "../Hooks/UseCheckLog";
import styles from "./Membership.module.css";
import { useState, useEffect } from "react";

const Membership = ({userData}) => {

  const [memberSub, setMemberSub] = useState(null);
  const [refresh,setRefresh] = useState(false);
  useEffect(() => {
    const fetchUserData = async() => {
        const userSub = await UseCheckLog()

        setMemberSub(userSub.data.user_sub);
        switch (userSub.data.user_sub) {
            case "standard":
              setMemberSub("st");
              break;
            case "vip":
              setMemberSub("vip");
              break;
            case "vvip":
              setMemberSub("vvip");
              break;
            default:
              break;
          }
    }
    fetchUserData();
  }, [refresh]);
  const changeMembershipHandler = async (membership) => {
    try  {
        await UseChangeUserData(membership, "membership");
        setRefresh(!refresh)
    } catch(error) {
        console.log('Error', error )
    }

  }
  if (memberSub) {
    return (
      <div className={styles.membershipContainer}>
        <div className={styles.membership}>
          <div>OpusElite Membership</div>
          <div className={styles.plansContainer}>
            <div>
              <div>OpusElite Plus</div>
              <div>
                OpusElite Plus offers an unparalleled subscription experience,
                granting exclusive access to a world of bespoke elegance.
                Elevate your style and lifestyle with premium perks, with
                premium prices.
              </div>
            </div>

            <div className={styles.plans}>
              <div className={`${styles.secondary1}  ${memberSub === "st" ? styles.box: ""}`}>
                <div >
                  <div>OpusElite Standard</div>
                  <div>Free of charge</div>
                </div>
                <div>
                  <ul>
                    <li>
                      Access to exclusive OpusElite newsletters and style tips
                    </li>
                    <li>Early notification of seasonal sales and promotions</li>
                    <li>Limited-time access to select OpusElite events</li>
                    <li>Every 3rd Suit of the decade is free.</li>
                  </ul>
                </div>
                <div>
                  <button onClick={() => changeMembershipHandler('standard')}>
                    
                    {memberSub === "st"
                      ? "Current Plan"
                      : "Cancel current plan"}
                  </button>
                </div>
              </div>
              <div className={`${styles.primary}  ${memberSub === "vip" ? styles.box: ""}` }>
                <div>
                  <div>OPUSELITE VIP</div>
                  <div>$39.99/Month</div>
                </div>
                <div>
                  <ul>
                    <li>Access to perks from the Standard tier</li>
                    <li>Exclusive invites to OpusElite members-only events.</li>
                    <li>Priority access to OpusElite seasonal collections</li>
                    <li>Same-day delivery for all products ordered online</li>
                  </ul>
                </div>
                <div>
                  <button onClick={() => changeMembershipHandler('vip')}>
                    {memberSub === "vip"
                      ? "Current Plan"
                      : "Become a VIP member"}
                  </button>
                </div>
              </div>
              <div className={`${styles.secondary2} ${memberSub === "vvip" ? styles.box: ""}`} >
                <div>
                  <div>OpusElite VVIP</div>
                  <div>$79.99/Month</div>
                </div>
                <div>
                  <ul>
                    <li>Access to perks from the Standard and VIP tiers</li>

                    <li>
                      Invitations to OpusElite's most exclusive fashion events
                      to get inspired
                    </li>
                    <li>
                      Concierge service for appointment scheduling at OpusElite
                      showrooms.
                    </li>
                  </ul>
                </div>
                <div>
                  <button onClick={() => changeMembershipHandler('vvip')}>
                    {memberSub === "vvip"
                      ? "Current Plan"
                      : "Become a VVIP member"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading,,</div>
  }
}; 
export default Membership;
