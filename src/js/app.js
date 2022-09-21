import { data } from "autoprefixer";
import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const ul = document.querySelector("ul");

  let pokemonList = [];

  fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then((response) => response.json())
  .then((data) => {

    data.results.forEach((key) => {
      pokemonList.push(key.name);
    });

    console.log(pokemonList)

    pokemonList.forEach((p) => {
      let li = document.createElement('li');
      li.innerText = p;
      console.log(li);
      ul.appendChild(li);
    })
  });

});
