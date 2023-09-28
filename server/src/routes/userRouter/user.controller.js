const {
  createUser,
  getUser,
  changeUserSub,
  changeUserData,
  removeItemsFromUserCart,
} = require("../../models/user/user.model");

async function createUserInDatabase(user) {
  const ress = await createUser(user);

  if (ress) {
    return ress;
  } else {
    return null;
  }
}
async function changeUserSubMode(userID, newSub) {
  const ress = await changeUserSub(userID, newSub);
  if (ress) {
    return ress;
  } else {
    return null;
  }
}

async function getUserDataFromDatabase(userid) {
  if (!userid) {
    return;
  }
  try {
    const userData = await getUser(userid);
    if (userData) {
      return userData;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function changeUserDataInDatabase(userID, newData) {
  try {
    const changedData = await changeUserData(userID, newData);
    if (changedData.modifiedCount !== 0) {
      return changedData;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
async function clearUserCart(userID) {
  try {
    const clearedCart = await removeItemsFromUserCart(userID);
    if (clearedCart) {
      return clearedCart;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = {
  createUserInDatabase,
  getUserDataFromDatabase,
  changeUserDataInDatabase,
  clearUserCart,
  changeUserSub,
};
