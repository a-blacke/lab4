// Promise Maker

function getWeather() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve('Sunny');
        }, 100)
    })
}

function getWeatherIcon(weather) {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            switch(weather) {
                case 'Sunny':
                    resolve('sun');
                    break;
                case 'Cloudy':
                    resolve('cloud');
                    break;
                case 'Rainy':
                    resolve('rain');
                    break;
                default:
                    reject('No icon found.');
            }
        }, 100)
    })
}

function onSuccess(data) {
    console.log(`Success ${data}`)
}

function onError(error) {
    console.log(`Error: ${error}`)
}

// Promise Receiver

// Chaining of promises

getWeather()
    .then(onSuccess, onError)
    .then(onSuccess, onError)

