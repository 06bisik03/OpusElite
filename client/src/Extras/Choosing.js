import { useParams } from "react-router-dom";
import ChoosingScent from "./ChoosingScent";
import ChoosingSuit from "./ChoosingSuit";
import ChoosingTailor from "./ChoosingTailor";

const Choosing = () => {
  const {choicetype} = useParams("choicetype");
  console.log(choicetype)
  
  if (choicetype === "scent") {
    return <ChoosingScent />;
  } else if (choicetype === "suit") {
    return <ChoosingSuit />;
  } else if (choicetype === "tailor") {
    return <ChoosingTailor />;
  }
};
export default Choosing;
