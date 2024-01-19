const {Router} = require ("express")
const router = Router();
const booksCtrl = require("../controller/books.controller")

router.get("/", booksCtrl.getStart);

router.get("/books", booksCtrl.getBooks);

router.get("./books/:id_book", booksCtrl.getBookParams);

router.post("/books", booksCtrl.postBooks);

router.put("/books", booksCtrl.putBooks);

router.delete("/books", booksCtrl.deleteBooks);

module.exports = router;

