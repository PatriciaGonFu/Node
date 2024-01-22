const { Book } = require("../models/book");

let myBooks = [
    new Book("Reina Roja", "Tapa blanda", "Juan Gómez Jurado", 9.95, "https://m.media-amazon.com/images/I/71RLUa5vN0L._SY522_.jpg",1111),
    new Book("La novia gitana", "Tapa blanda", "Carmen Mola", 13.50, "https://m.media-amazon.com/images/I/51K4PqT6o-L._SY445_SX342_.jpg",2222),
    new Book("Esperando el diluvio", "Tapa blanda", "Dolores Redondo", 16.95, "https://miro.medium.com/v2/resize:fit:1200/1*EBK2S-T0Ana6CqCdqS9lDA.jpeg",3333),
    new Book("La isla de Alice", "Tapa blanda","Daniel Sánchez Arévalo", 10.40, "https://m.media-amazon.com/images/I/91NjPeSW-JL._AC_UY327_FMwebp_QL65_.jpg",4444),
    new Book("Asesinato para principiantes","Tapa blanda","Holly Jackson",15.15,"https://m.media-amazon.com/images/I/51DGoD4gi+L._SY445_SX342_.jpg",5555),
    new Book("Entre los muertos","Tapa blanda","Mikel Santiago",7.59,"https://m.media-amazon.com/images/I/91RqXewjEoL._SY522_.jpg",6666),

  ];

  function getStart(request, response)
{
    let respuesta = {error: false, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

function getBookParams(request, response) {
    let id_book = parseInt(request.params.id_book);

    let filteredBooks = myBooks.filter(book => book.id_book == id_book);

    if (filteredBooks.length > 0) {
        response.send(filteredBooks[0]);
    } else {
        response.send({ error: true, codigo: 200, mensaje: "El libro no existe" });
    }
}

function getBooks(request, response)
{
    let respuesta;
    if (myBooks.length > 0) 
        respuesta = myBooks;
    else
        respuesta = {error: true, codigo: 200, mensaje: "No hay libros"}

    response.send(respuesta);
}

function postBooks(request, response){
    let respuesta;
    let newBook = {
        title: request.body.title,
        type: request.body.type,
        author: request.body.author,
        price: request.body.price,
        photo: request.body.photo,
        id_book: request.body.id_book
    };

    let pruebaBook = myBooks.find(book => book.id_book === newBook.id_book);

        if (!pruebaBook){
            myBooks.push(newBook);
            respuesta = {error: false, codigo: 200, mensaje: "Libro añadido", data: newBook}
        }
        else{
        respuesta = {error: true, codigo: 200, mensaje: "Libro ya existe"};
        }
    response.send(respuesta);
}

function putBooks(request, response) {
    let respuesta;
    let id_book = parseInt(request.params.id_book);

    let i = myBooks.findIndex(book => book.id_book === id_book);
    
    if (i !== -1) {
        myBooks[i] = {
            title: request.body.title,
            type: request.body.type,
            author: request.body.author,
            price: request.body.price,
            photo: request.body.photo,
            id_book: request.body.id_book
        };

        respuesta = { error: false, codigo: 200, mensaje: "Libro actualizado", resultado: myBooks[i] };
    } else {
        respuesta = { error: true, codigo: 200, mensaje: "Libro no existe" };
    }

    response.send(respuesta);
}


function deleteBooks (request, response){
    let respuesta;
    let id_book = parseInt(request.params.id_book);
    
    let i = myBooks.findIndex(book => book.id_book === id_book);
    if (i !== -1){
        myBooks.splice(i, 1);
        respuesta = {error: false, codigo: 200, mensaje: "Libro eliminado", resultado: myBooks};
    }
    else
        respuesta = {error: true, codigo: 200, mensaje: "Libro no existe"};
    
    response.send(respuesta);
}



module.exports = {getStart, getBookParams, getBooks, postBooks, putBooks, deleteBooks}
