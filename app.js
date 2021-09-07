const api_Key = `35c5172ae0778b2cab7062d914ff89b6`;
const searchTempereture = () => {
     const inputField = document.getElementById('inputField');
     const inputValue = inputField.value;

     const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${api_Key}&units=metric`;

    fetch(url)
    .then(res => res.json())
    .then(data => display(data))


     console.log(url);
}

const display = temp => {
    console.log(temp);

    const cityName = document.getElementById('city_name_display');
    const tempValue = document.getElementById('temp-value');
    const weatherStatus = document.getElementById('weather-status');

    cityName.innerText = temp.name;
    tempValue.innerText = temp.main.temp;
    weatherStatus.innerText = temp.weather[0].main;

    const urlImg  = `http://openweathermap.org/img/wn/${temp.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src',urlImg);
    console.log(urlImg);


}