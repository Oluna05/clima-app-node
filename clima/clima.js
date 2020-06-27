const axios = require('axios');


const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=3739fbe650ae02d7e6bdda7a7323aaf3&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
};