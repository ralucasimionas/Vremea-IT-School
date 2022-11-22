let currentCity = localStorage.getItem("city");

if (!currentCity) {
  currentCity = "București";
  localStorage.setItem("city", "București");
}
updateCityDisplay(currentCity);

displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);
