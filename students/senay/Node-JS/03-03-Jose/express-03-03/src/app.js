// import express from 'express';
// import cors from 'cors';
// import writeFile from 'fs/promises';


/**
 * Para el Backend nos debemos crear un proyecto en express js el cual llamaremos user api el cual 
 * estara levantado el puerto 4000.
 * 
Nuestra app almacenará la información en un fichero llamado users.json, la información tendrá la 
siguiente estructura {id:1, name:xxx, lastname:xxx, username:xxx, country:xxx, img:xxx}

Nuestro metodo Get con el path /users nos debe devolver la información de todos los usuarios.

Debemos tener un metodo Get que nos devuelva la informacion de un solo usuario o un 404 en caso de 
q no exista, para eso debemos valernos de los params.

Nuestro metodo Post nos debe permitir añadir un usuario a nuestro fichero users.json y devuelva un 
status 201.

Tendremos un metodo Delete que nos debe permitir eliminar de nuestro fichero un usuario e 
enviara un status 204 y un metodo Patch que nos permita actualizar la informacion de algun usuario.


Vamos a crear una App en React que para probar nuestro backend.

Para ello debemos crearnos una app react que mostrara información de usuarios,  para la maquetación 
usaremos React-Boostrap ,esta tendrá la siguiente estructura:

Una pagina Listado  la cual  mostrara en Cards el  username y el pais de todos los usuarios o 
no mostrara nada si no existieran aun, también tendrá una navegación hacia la pagina  de registro.

Una pagina para darse de alta  la cual será un formulario donde introduciremos nuestro nombre, 
apellido, nombre de usuario, email , una url de imagen y el pais.

Una pagina de details donde se mostrara toda la información incluida la imagen del usuario, 
a esta accederemos a darle click a la card.

Nuestra Card del Listado deben tener dos botones uno de delete y otro de update, en el de 
delete podremos borrar al usuario de nuestro backend y en el de update debe navegar hasta 
nuestro formulario de registro donde veremos  los datos de ese usuario en los input y 
actualizaremos los datos.
 */


// Para el Backend nos debemos crear un proyecto en express js el cual llamaremos user api el cual
// estara levantado el puerto 4000.

// const app = express();
// app.use(cors());
// app.use(express.json());
// const port = 4000;


// app.get('/', (req, res) => {
//     res.send({ 'name': 'senay' });
// })

// app.listen(port, () => {
//     console.log(`Listening port ${port}`)
// })

// 2 Nuestra app almacenará la información en un fichero llamado users.json, la información tendrá la
// siguiente estructura { id: 1, name: xxx, lastname: xxx, username: xxx, country: xxx, img: xxx }

import express from 'express';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import { readFileSync, writeFileSync, mkdirSync, accessSync, constants } from 'fs';

const FILE_PATH = './data/users.json';
const app = express();
const port = 4000;
app.use(express.json()); // esto procesa el body en formato JSON y asi lo puedo leer en la request

// inicializar el archivo si NO existe
try {
    accessSync(FILE_PATH, constants.R_OK | constants.W_OK);
} catch (err) {
    console.warn('Error al acceder al archivo: ', err);
    console.warn('Creando un archivo con un array de productos vacio...');
    mkdirSync('data');
    writeFileSync(FILE_PATH, '[]');
}

const users = JSON.parse(readFileSync(FILE_PATH, { encoding: 'utf8' }));


app.get('/users', (req, res) => res.json(users));

app.post('/users', async (req, res) => {
    //1. proceso el body (gracias al express.json()) req.body NO es undefined
    if (typeof req.body.name == 'number') {
        res.status(400).json({ error: 'El precio debe ser un número' });
    } else {
        //2. creo un nuevo producto
        const id = uuidv4();
        const userInfo = {
            ...req.body,
            id // esto es lo mismo que poner id:id
        }
        //3. añado el producto al array
        users.push(userInfo);
        await fs.writeFile(FILE_PATH, JSON.stringify(users));
        //4. devolver el userInfo creado
        res.json(userInfo);
    }
})



const server = app.listen(port, () => {
    console.log(`Servidor escuchan en el puerto ${port}`);
});