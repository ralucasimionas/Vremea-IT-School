const bucharest = document.querySelector(".bucharest");
const oradea = document.querySelector(".oradea");
const timisoara = document.querySelector(".timisoara");
const clujNapoca = document.querySelector(".cluj-napoca");
const deva = document.querySelector(".deva");
const sibiu = document.querySelector(".sibiu");

function updateCityDisplay(city) {
  const currentCity = document.getElementById("current-city");
  currentCity.innerHTML = city;
}

function updateCity(city) {
  // updatam orasul afisat
  updateCityDisplay(city);
  //   salvam noul oras in localStorage
  localStorage.setItem("city", city);

  // afisam noile date pentru vremea curenta de la API
  displayCurrentWeather(city);

  //   afisam noile date pentru prognoza de la API
  displayWeatherForecast(city);
}

bucharest.addEventListener("click", function () {
  updateCity("București");
});

oradea.addEventListener("click", function () {
  updateCity("Oradea");
});

timisoara.addEventListener("click", function () {
  updateCity("Timișoara");
});

clujNapoca.addEventListener("click", function () {
  updateCity("Cluj-Napoca");
});

deva.addEventListener("click", function () {
  updateCity("Deva");
});

sibiu.addEventListener("click", function () {
  updateCity("Sibiu");
});
