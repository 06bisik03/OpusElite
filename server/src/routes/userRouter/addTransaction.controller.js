const {
  postTransaction,
  getTransaction,
  getTransactionById,
} = require("../../models/user/transaction.model");

async function postTransactionToDatabase(transaction) {
  const ress = await postTransaction(transaction);
  console.log(ress);
  return ress;
}
async function getTransactionsFromDatabase(user_id) {
  console.log(user_id);
  const ress = await getTransaction(user_id);
  if (ress) {
    return ress;
  } else {
    return null;
  }
}
async function getTransactionFromDatabaseById(trsid) {
  const ress = await getTransactionById(trsid);
  if (ress) {
    return ress;
  } else {
    return null;
  }

}
module.exports = {
  postTransactionToDatabase,
  getTransactionsFromDatabase,
  getTransactionFromDatabaseById,
};
