var CreateCards = require("./CreateCards");
const axios = require("axios");
var CreateCarousel = require("./CreateCarousel");
require("./Scroll");

(async function obtenerDatos() {
  try {
    const respuesta = await axios.get("http://localhost:3000/movies");
    CreateCards(respuesta.data);
    CreateCarousel(respuesta.data);
  } catch (error) {
    console.error("Error al obtener las películas.");
    document.getElementById("container").innerHTML =
      '<p class="text-center text-danger">Error al cargar las películas. Inténtalo de nuevo más tarde.</p>';
  }
})();
