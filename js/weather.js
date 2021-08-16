const API_KEY = "0ff1734a1ea84a661352db4590a40efa";


function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityContainer = document.querySelector(".weather span:last-child");
            const weatherContainer = document.querySelector(".weather span:first-child");
            cityContainer.innerText = data.name; 
            weatherContainer.innerText = `${data.weather[0].main} / ${data.main.temp}`; 
    });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// fetch - js가 나 대신 url을 불러주도록!
//      fetch는 promise다. 서버에 요청 후 응답까지 시간이 걸린다는 의미. 그래서 then이 필요하다. (#8.1)
//      response의 json을 얻는다. 그리고나서, 그 안에 있는 data를 바라보자.
// document를 확인하여 섭씨로 변환하는 방법을 파악했다는 점!