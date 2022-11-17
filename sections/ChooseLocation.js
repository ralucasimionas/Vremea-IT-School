const bucharest = document.querySelector(".bucharest");
const oradea = document.querySelector(".oradea");
const timisoara = document.querySelector(".timisoara");

function updateCityDisplay(city) {
  const currentCity = document.getElementById("current-city");
  currentCity.innerHTML = city;
}

function updateCity(city) {
  // updatam orasul afisat
  updateCityDisplay(city);
  //   salvam noul oras in localStorage
  localStorage.setItem("city", city);

  // afisam noile date de la API
  displayCurrentWeather(city);
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
