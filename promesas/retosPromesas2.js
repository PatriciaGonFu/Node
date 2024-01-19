const fs = require('fs/promises');
const readline = require("readline");

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



async function manejarObjetoReto(){
    let objetoReto = {
        'name': 'Patricia',
        'surname': 'Gonzalez',
        'age': 44
    };

    const objetoJSON = JSON.stringify(objetoReto);

    try {
        await fs.writeFile('objetoReto.json', objetoJSON)
            console.log('El archivo se ha guardado');

            const data = await fs.readFile('objetoReto.json', 'utf8');
            const objetoDesdeArchivo = JSON.parse(data);

            console.log('Contenido del archivo JSON: ');
            console.log(objetoDesdeArchivo);
        
        }catch(err){
            console.error('Error: ', err);
        }
    }

async function crearNuevoObjeto() {
    let nuevoObjeto = {};
    let rl;
    
    try{
        rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        nuevoObjeto.name = await pregunta('Nombre: ');
        nuevoObjeto.surname = await pregunta('Apellido: ');
        nuevoObjeto.age = parseInt(await pregunta('Edad: '));
    
        const nuevoObjetoJSON = JSON.stringify(nuevoObjeto);
    
        await fs.writeFile('nuevoObjeto.json', nuevoObjetoJSON);
        console.log('El archivo del nuevo objeto se ha guardado');

    } 
    catch (err) {
        console.error('Error: ', err);
    }
        rl.close();
        
    }
    
    manejarObjetoReto();
    crearNuevoObjeto();
    