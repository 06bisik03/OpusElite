
import UseCheckLog from "./UseCheckLog";
const UseUserAuth = async() => {
    const loggedAlready = await UseCheckLog();
    if(!loggedAlready) {
        window.open(
        `${process.env.REACT_APP_API_URL}/auth/google/callback`,
        "_self"
      );
    } 
    
}
export default UseUserAuth;