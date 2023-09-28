const express = require("express");
const userRouter = express.Router();
const { v4: uuidv4 } = require("uuid");
const {
  createUserInDatabase,
  getUserDataFromDatabase,
  changeUserDataInDatabase,
  changeUserSub,
  clearUserCart,
} = require("./user.controller");
const { createUserWithEmail } = require("../../models/user/user.model");

userRouter.get("/getuser/:userid", async (req, res) => {
  const userid = req.params.userid;
  try {
    const user = await getUserDataFromDatabase(userid);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error while getting the user" });
  }
});
userRouter.get("/saveuser/:userid/:name", async (req, res) => {
  const userid = req.params.userid;
  const username = req.params.name;
  const user = {
    user_id: userid,
    user_name: username,
  };
  try {
    const createdUser = await createUserInDatabase(user);
    res.status(200).send(createdUser);
  } catch (error) {
    res.status(500).json({ message: "Server error while creating user" });
  }
});

// userRouter.post("/saveuseremail", async (req, res) => {
//   const user = req.body;
//   const uniqueID = uuidv4();
//   const newUser = {
//     user_id: uniqueID,
//     user_picture:
//       "https://icons-for-free.com/iconfiles/png/512/neutral+user-131964784832104677.png",
//     ...user,
//   };

//   try {
//     const createdUser = await createUserWithEmail(newUser);

//     res.status(200).send(createdUser);
//   } catch (error) {
//     console.error(error);
//     throw new Error(error);
//   }
// });
userRouter.post("/changedata/:userid", async (req, res) => {
  const userid = req.params.userid;
  const newData = req.body;
try {
  const changedData = await changeUserDataInDatabase(userid, newData);

  res.status(200).json(changedData);
} catch(error) {
  res.status(404).json({ok: false})
}
  
});
userRouter.get("/clearcart/:userid", async (req, res) => {
  const userid = req.params.userid;
  try {
    const clearedCart = await clearUserCart(userid);
    if (!clearedCart) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ message: "Succesfully emptied cart." });
  } catch (err) {
    return res.status(500).json({ message: "Problem with the server" });
  }
});
userRouter.get("/changemembership/:userid/:newsub", async (req, res) => {
  const userid = req.params.userid;
  const newSub = req.params.newsub;
  try {
    const newSubbedUser = await changeUserSub(userid, newSub);
    if (!newSubbedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json(newSubbedUser);
  } catch (error) {
    res.status(500).json({ message: "Server error while changing membership" });
  }
});
module.exports = userRouter;
