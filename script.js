

function dhakaFun() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Dhaka,BD&appid=26770431d7d7691c63c0b31dd89b15e4')
    .then(res => res.json())
    .then(data => {
    const tr = data.main.temp;
    const convertToCelcius = Math.ceil(tr - 273.15);
    document.getElementById('tempreature').innerText = convertToCelcius;
    const position = data.weather[0].main;
    document.getElementById('position').innerText= position;
    const cityName = data.name;
    document.getElementById('city-name').innerText = cityName;
})
}
dhakaFun();



const button = document.getElementById('inputbutton');
button.addEventListener('click', function() {
    const getInfo = document.getElementById('getinput').value;
    const Feni='Feni';
    const feni='feni';
    const Comilla='Comilla';
    const comilla='comilla';
    const Sylhet='Sylhet';
    const sylhet='sylhet';
    const Chittagong='Chittagong';
    const chittagong='chittagong';
    const Dhaka='Dhaka';
    const dhaka='dhaka';

    if (getInfo === Feni) {
        feniFun();
        document.body.style.backgroundImage = "url('images/scnd-bg.jpg')"
    }
    else if (getInfo == feni) {
        feniFun();
        document.body.style.backgroundImage = "url('images/scnd-bg.jpg')"
    }
    else if (getInfo == Comilla) {
        comillaFun();
        document.body.style.backgroundImage = "url('images/trd-bg.jpg')"
    }
    else if (getInfo == comilla) {
        comillaFun();
        document.body.style.backgroundImage = "url('images/trd-bg.jpg')"
    }
    else if (getInfo == Sylhet) {
        sylhetFun();
        document.body.style.backgroundImage = "url('images/four-bg.jpg')"
    }
    else if (getInfo == sylhet) {
        sylhetFun();
        document.body.style.backgroundImage = "url('images/four-bg.jpg')"
    }
    else if (getInfo == Chittagong) {
        chittagongFun();
        document.body.style.backgroundImage = "url('images/last.jpg')"
    }
    else if (getInfo == chittagong) {
        chittagongFun();
        document.body.style.backgroundImage = "url('images/last.jpg')"
    }
    else if (getInfo == Dhaka) {
        dhakaFun();
        document.body.style.backgroundImage = "url('images/bg-image.jpg')"
    }
    else if (getInfo == dhaka) {
        dhakaFun();
        document.body.style.backgroundImage = "url('images/bg-image.jpg')"
    }
    else{
        alert("Assalamualikum Brother, You Didn't Proper Search. Use This Keyword For Result - Dhaka, Comilla, Feni, Sylhet, Chittagong. More Location Will Be Added Very Soon.Thank You.. Enjoy (❁´◡`❁)")
    }
})






// Get API Data Side




function feniFun() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Feni,BD&appid=26770431d7d7691c63c0b31dd89b15e4')
    .then(res => res.json())
    .then(data => {
    const tr = data.main.temp;
    const convertToCelcius = Math.ceil(tr - 273.15);
    document.getElementById('tempreature').innerText = convertToCelcius;
    const position = data.weather[0].main;
    document.getElementById('position').innerText= position;
    const cityName = data.name;
    document.getElementById('city-name').innerText = cityName;
})
}

function comillaFun() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Comilla,BD&appid=26770431d7d7691c63c0b31dd89b15e4')
    .then(res => res.json())
    .then(data => {
    const tr = data.main.temp;
    const convertToCelcius = Math.ceil(tr - 273.15);
    document.getElementById('tempreature').innerText = convertToCelcius;
    const position = data.weather[0].main;
    document.getElementById('position').innerText= position;
    const cityName = data.name;
    document.getElementById('city-name').innerText = cityName;
})
}


function sylhetFun() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Sylhet,BD&appid=26770431d7d7691c63c0b31dd89b15e4')
    .then(res => res.json())
    .then(data => {
    const tr = data.main.temp;
    const convertToCelcius = Math.ceil(tr - 273.15);
    document.getElementById('tempreature').innerText = convertToCelcius;
    const position = data.weather[0].main;
    document.getElementById('position').innerText= position;
    const cityName = data.name;
    document.getElementById('city-name').innerText = cityName;
})
}

function chittagongFun() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=Chittagong,BD&appid=26770431d7d7691c63c0b31dd89b15e4')
    .then(res => res.json())
    .then(data => {
    const tr = data.main.temp;
    const convertToCelcius = Math.ceil(tr - 273.15);
    document.getElementById('tempreature').innerText = convertToCelcius;
    const position = data.weather[0].main;
    document.getElementById('position').innerText= position;
    const cityName = data.name;
    document.getElementById('city-name').innerText = cityName;
})
}