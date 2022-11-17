function getDayOfWeek(utc) {
  const date = new Date(utc * 1000);

  const dayIndex = date.getDay();

  let day;

  switch (dayIndex) {
    case 0:
      day = "Duminică";
      break;

    case 1:
      day = "Luni";
      break;

    case 2:
      day = "Marți";
      break;

    case 3:
      day = "Miercuri";
      break;

    case 4:
      day = "Joi";
      break;

    case 5:
      day = "Vineri";
      break;

    case 6:
      day = "Sâmbătă";
      break;

    default:
      day = "unknown day";
  }

  return day;
}

function getHour(utc) {
  const date = new Date(utc * 1000);

  let hour = date.getHours();
  if (hour < 10) {
    hour = "0" + hour;
  }

  let minutes = date.getUTCMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return `${hour}:${minutes}`;
}
