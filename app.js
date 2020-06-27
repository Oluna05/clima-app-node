const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// console.log(argv.direccion);

//argv.direccion

// lugar.getLugarLatLng(argv.direccion)
//     .then(resp => {
//         console.log(resp);
//     })
//     .catch(err => console.log(`Ocurrio un error interno: ${err}`));

// clima.getClima(40.42954, -3.67931)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(direccion) => {
    try {
        const respLugar = await lugar.getLugarLatLng(direccion);
        const respClima = await clima.getClima(respLugar.lat, respLugar.lng);
        return `El clima de ${direccion} es de ${respClima}`;
    } catch (err) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);