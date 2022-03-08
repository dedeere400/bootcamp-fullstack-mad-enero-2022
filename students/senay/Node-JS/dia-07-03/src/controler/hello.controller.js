import { fromModem } from "../model/hello.model.js"



export const fromController = (req, res) => {
    const helloModem = fromModem()
    res.send(helloModem)
    // res.send('Hola mundo desde controller')
}

// export const getFlightById = (req, res) => {
//     const flights =
// }

// export const controller = ()  {
//     const hola = 'Hola desde model'
//     return hola;
// }


