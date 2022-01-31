let img = document.querySelector("img");
let caption = document.querySelector("h3");
let button = document.querySelector(".btn");
let data;
fetch("https://raw.githubusercontent.com/bromberis/kava/main/photos.json")
  .then((response) => response.json())
  .then((data) => imageLoad(data));

function imageLoad(duomenys) {
  data = duomenys;
  console.log(data);
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

button.addEventListener("click", function () {
  let random = getRandom(0, 9);
  console.log(random);
  img.src = data[random].src;
  caption.textContent = data[random].title;

  confetti({
    particleCount: 300,
    spread: 360,
    startVelocity: 60,
    decay: 0.9,
    gravity: 0,
    colors: ["#000000", "#000001", "#CCB5B1", "#B02B18", "#3C5032"],
  });
});
