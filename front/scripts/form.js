document.getElementById("clearBtn").addEventListener("click", function () {
  document.getElementById("movieForm").reset();
});

document
  .getElementById("movieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const year = document.getElementById("year").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const genre = document.getElementById("genre").value;
    const rate = document.getElementById("rate").value;
    const poster = document.getElementById("poster").value;

    if (
      !title ||
      !year ||
      !director ||
      !duration ||
      !genre ||
      !rate ||
      !poster
    ) {
      alert(
        "Por favor, completa todos los campos antes de enviar el formulario."
      );
      return;
    }

    alert("Formulario enviado con éxito!");

    // Preparar datos del formulario para enviar
    const movieData = {
      title,
      year: parseInt(year), // Convertir a número
      director,
      duration,
      genre: genre.split(",").map((g) => g.trim()), // Convertir string a array de géneros
      rate: parseFloat(rate), // Convertir a número
      poster,
    };

    axios
      .post("http://localhost:3000/movies", movieData)
      .then((response) => {
        console.log("Película agregada:", response.data);
      })
      .catch((error) => {
        console.error("Error al agregar la película:", error);
      });
  });
