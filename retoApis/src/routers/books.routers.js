const { Router } = require("express");
const router = Router();
const booksCtrl = require("../controller/books.controller");

router.get("/", booksCtrl.getStart);

router.get("/books/:id_book", booksCtrl.getBookParams);
router.get("/books", booksCtrl.getBooks);
router.post("/books", booksCtrl.postBooks);
router.put("/books/:id_book", booksCtrl.putBooks);
router.delete("/books/:id_book", booksCtrl.deleteBooks);

module.exports = router;


