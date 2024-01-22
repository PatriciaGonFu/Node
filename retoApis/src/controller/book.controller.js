const { Book } = require("../models/book");
// let book = null;

let book = new Book('Mi abuela en bicicleta','Tapa dura','Mi abuelo',4.00, 'idididid',1597);

function getStart(request, response)
{
    let respuesta = {error: false, codigo: 200, mensaje: 'Punto de inicio'};
    response.send(respuesta);
}

function getBook(request, response)
{
    let title = request.query.title;
    let respuesta;
    if (book != null && (!title || title === book.title))
        respuesta = {error: false, codigo: 200, data: book}
    else
        respuesta = {error: true, codigo: 200, mensaje: "El libro no existe"}
    response.send(respuesta);
}

function postBook(request, response){
    let respuesta;
    console.log(request.body)
    if (book === null)
    {
        book = new Book( request.body.title,
                request.body.type,
                request.body.author,
                request.body.price,
                request.body.photo,
                request.body.id_book)
        
        respuesta = {error: false, codigo: 200, mensaje: "Libro añadido", data: book};
    }
    else
        respuesta = {error: true, codigo: 200, mensaje: "Libro ya existe"};

    response.send(respuesta);
}

function putBook(request, response){
    let respuesta;
    if (book != null && book.id_book == request.body.id_book)
    {
        book.title = request.body.title;
        book.type = request.body.type;
        book.author = request.body.author;
        book.price = request.body.price;
        book.photo = request.body.photo;
        book.id_book = request.body.id_book;
    
        respuesta = {error: false, codigo: 200, mensaje: "Libro actualizado", resultado: book};
    }
    else
        respuesta = {error: true, codigo: 200, mensaje: "Libro no existe", resultado: book};
    
    response.send(respuesta);
}

function deleteBook (request, response){
    let respuesta;
    if (book != null)
    {
        book = null;
        respuesta = {error: false, codigo: 200, mensaje: "Libro eliminado", resultado: book};
    }
    else
        respuesta = {error: true, codigo: 200, mensaje: "Libro no existe", resultado: book};
    
    response.send(respuesta);
}

module.exports = {getStart, getBook, postBook, putBook, deleteBook}