const axios = require('axios');
const getClima = async (lat,lng) => {
    let clima = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=b8070899fea2409af476f3a4ab385c09&units=metric`);

    return clima.data.main.temp;

};

module.exports = {
    getClima
}

