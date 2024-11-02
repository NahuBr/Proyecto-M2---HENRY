function CreateCarousel(movies) {
  const carouselcontainer = document.getElementById("carouselcontainer");
  const carouselHTML = movies
    .map(
      (movie, index) => `
                        <div class="carousel-item ${
                          index === 0 ? "active" : ""
                        }">
                          <img src="${movie.poster}" class="d-block w-100">
                          <div class="carousel-caption">
                            <h5>${movie.title}</h5>
                            <p><strong>Año:</strong> ${movie.year}</p>
                          </div>
                        </div>
                      `
    )
    .join("");
  carouselcontainer.innerHTML = carouselHTML;
}

module.exports = CreateCarousel;
