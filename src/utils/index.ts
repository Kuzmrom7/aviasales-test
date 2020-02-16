import add from "date-fns/add";
import format from "date-fns/format";

function getBoardingTime(seconds: number) {
  const hours = (seconds / 3600) ^ 0;
  const minutes = ((seconds - hours * 3600) / 60) ^ 0;

  const str = `${
    hours === 0 ? "" : hours < 10 ? "0" + hours + "ч" : hours + "ч"
  } ${
    minutes === 0 ? "" : minutes < 10 ? "0" + minutes + " м" : minutes + " м"
  }`;

  return str;
}

function getTimeOnFly(date: string, second: number) {
  var result = add(new Date(date), {
    seconds: second
  });

  return `${format(new Date(date), "HH:mm")} : ${format(
    new Date(result),
    "HH:mm"
  )}`;
}

function declOfNum(number: number) {
  switch (number) {
    case 0:
      return "Прямой";
    case 1:
      return "1 пересадка";
    case 2:
      return "2 пересадки";
    case 3:
      return "3 пересадки";
    case 4:
      return "4 пересадки";

    default:
      return number;
  }
}

export { getBoardingTime, getTimeOnFly, declOfNum };