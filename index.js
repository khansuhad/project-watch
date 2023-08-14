const deg = 6;
let sc = document.querySelector("#sc");
let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;

  hr.style.transform = `rotatez(${hh + mm / 12}deg)`;
  mn.style.transform = `rotatez(${mm}deg)`;
  sc.style.transform = `rotatez(${ss}deg)`;
});
