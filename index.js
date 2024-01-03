async function showWeather(){
    const API_key = "#";
    let latitude = 28.4267;
    let longitude = 75.8040;

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=28.4267&lon=75.8040&appid=#`);

    const data = await response.json();
    console.log("Weather data:->" ,data); 

    let newPara = document.createElement('p');
    newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`
    document.body.appendChild(newPara);
}

showWeather();