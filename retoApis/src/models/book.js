class Book {
    constructor (title, type, author, price, photo, id_book, id_user)
    {
        this.title = title;
        this.type = type;
        this.author = author;
        this.price = price;
        this.photo= ""+photo; 
        this.id_book = id_book;
    }
}

module.exports = {Book};

