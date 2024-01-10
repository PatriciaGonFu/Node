const fs = require('fs');

let objetoReto = {
    'name': 'Patricia',
    'surname': 'Gonzalez',
    'age': 44
}

const objetoJSON = JSON.stringify(objetoReto);

fs.writeFile('objetoReto.json', objetoJSON, () => {
     fs.readFile('objetoReto.json', (err, data) => {
        const objetoDesdeArchivo = JSON.parse(data);
        console.log('Contenido del archivo JSON:');
        console.log(objetoDesdeArchivo);
    });
});

const readline = require('readline');
const objetoReto3 = {};
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre: ', (name) => {
    objetoReto3.name = name;

    rl.question('Apellido: ', (surname) => {
        objetoReto3.surname = surname;

        rl.question('Edad: ', (age) => {
            objetoReto3.age = parseInt(age);

            const objetoJSON2 = JSON.stringify(objetoReto3);

            fs.writeFile('objetoReto3.json', objetoJSON2, (err) => {})
                rl.close();
            });
        });
    });
