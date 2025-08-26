//using promise
/*
const apiKey = "fec7e66e12315c7eac8827f5bd96fc15";
const city = "mysuru";

fetch(`https://api.openweathermap.org/data/2.5/weather?lat=12.3072&lon=76.6497&appid=${apiKey}&units=metric`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(`Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`);
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });
*/
//async await
  const apiKey = "fec7e66e12315c7eac8827f5bd96fc15";
const city = "mysuru";

async function weather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=12.3072&lon=76.6497&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(`Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`);
    } catch (error) {
        console.error("Error fetching weather:", error.message);
    }
}

// Call the function
weather();