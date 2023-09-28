const express = require("express");
const {
  passOnCustomSuitsData,
  passOnCustomShoesData,
  filterCustomShoes,
  filterCustomSuits,
} = require("./custom.controller");

const customShopRouter = express.Router();
customShopRouter.get("/suits", async (req,res) => {
    await passOnCustomSuitsData();
});
customShopRouter.get("/shoes", async (req,res) => {
    await passOnCustomShoesData();
});
customShopRouter.post("/newcustomsuit", async (req, res) => {
  const newSuitData = req.body;
  console.log(newSuitData);
  try {
    const ress = await filterCustomSuits(newSuitData);
    if (ress) {
      res.status(200).json(ress);
      return ress;
    } else {
      res.status(404).json({ message: "No such suit can be generated" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while generating new custom suit" });
  }
});
customShopRouter.post("/newcustomshoe", async (req, res) => {
  const newShoeData = req.body;
  try {
    const ress = await filterCustomShoes(newShoeData);
    if (!ress) {
      return res.status(404).json({ message: "No such shoe can be generated" });
    }
    res.status(200).json(ress);
    return ress;
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server error while filtering custom shoes" });
  }
});

customShopRouter.get("/removecustomsuit",async (req,res) => {
    
})

module.exports = customShopRouter;
