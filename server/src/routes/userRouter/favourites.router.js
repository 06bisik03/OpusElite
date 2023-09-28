const express = require("express");
const favsRouter = express.Router();
const {
  fetchLatestFavs,
  removeFromFavourites,
} = require("./favourites.controller");
favsRouter.get("/getmostrecent/:userid", async (req, res) => {
  const userid = req.params.userid;
  try {
    const ress = await fetchLatestFavs(userid);
    if (!ress) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(ress);
    return ress;
  } catch (error) {
    res.status(500).json({ message: "Problem fetching favs at router level" });
  }
});
favsRouter.get("/removefromfavs/:userid/:productid", async (req, res) => {
  const userid = req.params.userid;
  const productid = req.params.productid;
  try {
    const ress = await removeFromFavourites(userid, productid);
    res.status(200).json(ress);
    if (!ress) {
      return res.status(404).json({ message: "User not found" });
    }
    return ress;
  } catch (error) {
    res.status(500).json({ message: "Problem removing items from favs" });
  }
});
module.exports = favsRouter;
