const axios = require('axios');


const getLugarLatLng = async(direccion) => {

    const encodeURL = encodeURI(direccion);

    // const instance = axios.create({
    //     baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURL}`,
    //     headers: {
    //         "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
    //         "x-rapidapi-key": "e8e12c400dmsh7dbe5fcfe4a5756p1ebf41jsnb8fa522793ac",
    //         "useQueryString": true
    //     }
    // });

    const instance = axios.create({
        baseURL: `https://geocode.xyz/${encodeURL}?json=1`
    });

    const resp = await instance.get();
    if (resp.data === undefined || resp.data === null)
        throw new Error(`No hay resultados para ${direccion}`);

    const data = resp.data;
    const loc = data.standard.city;
    const lat = data.latt;
    const lng = data.longt;

    return {
        loc,
        lat,
        lng
    }

}


module.exports = {
    getLugarLatLng
};