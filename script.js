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

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 10);
  img.innerHTML = `<img src="${data[random].src}" alt="Photo" class="img-fluid mt-5" />`;
  caption.textContent = data[random].title;

  confetti({
    particleCount: 300,
    spread: 180,
    startVelocity: 60,
    colors: ["#000000", "#000001", "#CCB5B1", "#B02B18", "#3C5032"],
  });
});

// confetti
