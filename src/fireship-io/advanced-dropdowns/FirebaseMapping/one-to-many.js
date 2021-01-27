const authorId = "Maximiliam";

// 1. Embedded
const authorWithBooks = db.collection("authors").doc(authorId);

// Question: Do I need to query this data? Yes. Then do not embed, subcollection
const books = db.collection("authors").doc(authorId).collection("books");

// Do I need to query across multiple parents. Root collection
const booksFrom1971 = db
  .collection("books")
  .where("author", "=", authorId)
  .where("published", ">", 1971);
