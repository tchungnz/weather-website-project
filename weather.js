let city = 'Auckland';
const key = '40adf06629ce40618fe60414230902';
const cities = ['Auckland', 'Wellington', 'Christchurch', 'Melbourne','Sydney', 'London'];
const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`

async function retrieveWeatherData() {
        try {
            const response = await fetch(url)
            const weatherData = await response.json()
            console.log(weatherData.current.temp_c)
            //displayData(weatherData);
        } catch (error) {
            console.log(error)
        }
}

//const displayData = (data) => {
    //document.querySelector("#current-temperature").innerText = data.current.temp_C
//}

retrieveWeatherData();