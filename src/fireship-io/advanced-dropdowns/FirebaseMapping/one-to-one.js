// 1. Embedded, all data contained in a single document
const authorWithAccount = db.collection("authors").doc(userId);

// 2. Share docId
const author = db.collection("authors").doc(userId);
const account = db.collection("account").doc(userId);

// 3. Join related documents with different Ids,
const getAccount = async (userId) => {
  const snapshot = await db.collection("authors").doc(userId);
  const user = snapshot.data();

  return db.collection("account").doc(user.accountId);
};
