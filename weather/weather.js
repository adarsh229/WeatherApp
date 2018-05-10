const request = require('request');

var getWeather = (lat, lng, callback) => {
    request ({
        url: `https://api.darksky.net/forecast/5f164ab236210591a3fa70f863049d63/${lat},${lng}`,
        json: true
    
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to the server ');
    
        } else if (response.statusCode === 404) {
            callback('Unable to fetch weather ');
    
        } else if(response.statusCode === 200) {
            callback(undefined, {
                timezone: body.timezone,
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature,
                summary: body.currently.summary,
                humidity: body.currently.humidity
            });
        }
    
    
    });
}
module.exports.getWeather = getWeather;
