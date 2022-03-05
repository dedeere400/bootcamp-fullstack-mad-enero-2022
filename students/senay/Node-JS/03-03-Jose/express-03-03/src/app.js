import express from 'express';
import cors from 'cors';
import writeFile, { readFile } from 'fs/promises';
import { uuid as uuidv4 } from 'uuidv4';
import { deflateRaw } from 'zlib';
import { readFileSync, writeFileSync } from 'fs';


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

const app = express();
app.use(cors());
app.use(express.json());
const port = 4000;


// app.get('/', (req, res) => {
//     const data = readFileSync('/', { encoding: 'utf-8' })
//     console.log(data)
//     const obj = JSON.parse(data)
//     res.send(obj)
// })



app.get('/', (req, res) => {
    res.json({ name: 'senay' })
    res.send('new entry recived')
})


// app.post('/', (req, rea) => {
//     const { name, lastName, userName, email, img } = req.body;
//     if (!name || !lastName || !userName || !email || !img) {
//         res.status(400).send('Entries must have name, lastName, etc...')
//     }
//     let newBook = {
//         name, lastName, userName, email, img
//     };

//     books.push(newBook);
//     const jsonBooks = JSON.stringify(books)
//     writeFileSync('/users.json', jsonBooks, 'utf-8');

//     res.send('received post request')
// })


app.post('/users', (req, res) => {
    const id = uuidv4()
    const user = {
        name: req.body.name,
        lastName: req.body.lastName,
        userName: req.body.userName,
        email: req.body.email,
        id: id
    }


    const nameJson = readFileSync('./users.json', { encoding: 'utf-8' })
    const obj = JSON.parse(nameJson)
    obj.push(user)
    writeFile('./users.json', JSON.stringify(obj), () => { })
    res.send('Recibido')
})


app.listen(port, () => {
    console.log(`Listening port ${port}`)
})



// 2 Nuestra app almacenará la información en un fichero llamado users.json, la información tendrá la
// siguiente estructura { id: 1, name: xxx, lastname: xxx, username: xxx, country: xxx, img: xxx }