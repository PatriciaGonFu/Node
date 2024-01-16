const fs = require('fs/promises');
const readline = require('readline');

function pregunta(pregunta){
    const question = new Promise((resolve,reject) =>{
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(pregunta,(respuesta) => {
            resolve(respuesta);
            rl.close();
        });
    });
    return question;
}

let objetoReto = {
    'name': 'Patricia',
    'surname': 'Gonzalez',
    'age': 44
}

const objetoJSON = JSON.stringify(objetoReto);

fs.writeFile('objetoReto.json', objetoJSON)
    .then(() => {
        console.log('El archivo se ha guardado');
        return fs.readFile('objetoReto.json', 'utf8');
    })

    .then((data) => {
        const objetoDesdeArchivo = JSON.parse(data);
        console.log('Contenido del JSON: ');
        console.log(objetoDesdeArchivo);
    })
    .catch((err) => {
        console.error('Error: ', err);
    });

    const objetoReto2 = {};
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    const objetoReto3 = {};
    pregunta('Nombre: ')
        .then((name) =>{
            objetoReto3.name = name;
            return pregunta('Apellido: ');
        })
        .then((surname) =>{
            objetoReto3.surname = surname;
            return pregunta('Edad: ');
        })
        .then((age) => {
            objetoReto3.age = parseInt(age);
            const objetoJSON2 = JSON.stringify(objetoReto3);
            return fs.writeFile('objetoReto3.json', objetoJSON2);
        })
        .then(() =>{
            console.log('El archivo nuevo se ha guardado');
        })
        .catch((err) => {
            console.error('Error: ',err);
            rl.close()
        });
    
    
    
    