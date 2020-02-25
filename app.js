const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Clima de la ciudad solicitada',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async () =>{

    try {
        let coors = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(coors.lat,coors.lng);
    
        return `El clima en ${coors.direccion} es de : C° ${temp}`;
    } catch (error) {
        return `No se pudo determinar el clima en ${argv.direccion}`
    }

}

getInfo()
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log(err);
    })

