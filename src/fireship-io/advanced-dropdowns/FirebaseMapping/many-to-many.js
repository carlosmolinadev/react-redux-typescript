const authorId = "Maximiliam";
const bookId = "MaxProfit";

// Middle collection
const userReviews = db.collection("reviews").where("author", "=", authorId);
const userReviews = db.collection("reviews").where("book", "=", bookId);

// Single read with composite key
const specificReview = db.collection("reviews").doc(`${bookId}_${authorId}`);

// Reviews embedded on books
const bookWithReviews = db.collection("books").doc(bookId);
const userReviews = db.collection("books").orderBy("reviews.person");
