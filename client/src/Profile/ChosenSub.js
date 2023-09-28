import FavouritesSub from "./FavouritesSub";
import PastTransactionsSub from "./PastTransactionsSub";
import ProfileSub from "./ProfileSub";
import Membership from "./Membership";
const ChosenSub = ({subMode, userData}) => {
  
    if(subMode ==="Profile") {
    return <ProfileSub userData={userData} />
    } else if(subMode ==="Favourites") {
      return <FavouritesSub userData={userData}/>
    } else if(subMode === "PT") {
        return <PastTransactionsSub />
    } else if(subMode === "sub") {
      return <Membership userData={userData}/>
    }
}
export default ChosenSub;