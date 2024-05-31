const jokel = document.getElementById("joke");
const btn = document.getElementById("jokeBtn");

btn.addEventListener("click", generateJoke);

function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("https://icanhazdadjoke.com/", config)
    .then((res) => res.json())
    .then((data) => (jokel.innerHTML = data.joke));
}
