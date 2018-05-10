const request = require('request');

var geocodeAddress =  (address, callback) => {
    var encodedAddress = encodeURIComponent(address);


    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true //data coming back is a json data
    }, (error, response, body) => {  //second function is the callback function for once the data comes back from the http end point
        //called when the json data comes back to the node application
    
        if (error) {
            callback('Unable to connect to google servers ');
           // console.log('Unable to connect to google servers ');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address ');
            //console.log('Unable to find that address ');
        } else if (body.status === 'OK'){
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
            // console.log(`Address : ${body.results[0].formatted_address}`);
            // console.log(`Latitude : ${body.results[0].geometry.location.lat}`);
            // console.log(`Longitude : ${body.results[0].geometry.location.lng}`);
        }
    
       
    })

}

module.exports.geocodeAddress = geocodeAddress;
