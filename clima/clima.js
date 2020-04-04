const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=5340c8e53517c840f38e9ef019ef5b3e&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}