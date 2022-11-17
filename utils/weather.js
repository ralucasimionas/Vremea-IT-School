function windToKmPerHour(metersPerSecond) {
  return (metersPerSecond * 3600) / 1000;
}

function getWeatherIcon(iconCode) {
  return `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
