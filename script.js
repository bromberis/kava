
let img = document.querySelector("img");
let caption = document.querySelector("h3");
let button = document.querySelector(".btn");

button.addEventListener("click", function () {
  let random = Math.floor(Math.random() * 10) + 1;
  img.src = photos[random].src;
  caption.textContent = photos[random].title;

  confetti({
    particleCount: 300,
    spread: 180,
    startVelocity: 60,
    colors: ["#000000", "#000001", "#CCB5B1", "#B02B18", "#3C5032"],
  });
});

// confetti
