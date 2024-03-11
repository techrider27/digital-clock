const clock = () => {
  // since all the variables are in let we can use commmas
  let date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    ampm;

  // am pm
  ampm = hours > 12 ? "PM" : "AM";

  // 12 hr format
  hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours;

  // 00:00:00
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("amorpm").innerHTML = ampm;
  setTimeout(clock, 500);
};
clock();