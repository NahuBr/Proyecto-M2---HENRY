function CreateCards(movies) {
  const cardContainer = document.getElementById("container");
  const cardsHTML = movies
    .map(
      (movie) => `
                        <div class="card me-4" style="width: 18rem; position: relative;">
                            <img src="${
                              movie.poster
                            }" class="card-img-top mt-2" alt="${
        movie.title
      } Poster">
                            <div class="rate-badge position-absolute top-0 end-0 bg-dark text-white p-2 rounded mt-2 me-2" style="opacity: 0.9;">
                                ${movie.rate}
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">${movie.title}</h5>
                                <p class="card-text"><strong>Year:</strong> ${
                                  movie.year
                                }</p>
                                <p class="card-text"><strong>Director:</strong> ${
                                  movie.director
                                }</p>
                                <p class="card-text"><strong>Duration:</strong> ${
                                  movie.duration
                                }</p>
                                <p class="card-text"><strong>Genre:</strong> ${movie.genre.join(
                                  ", "
                                )}</p>
                            </div>
                        </div>
                    `
    )
    .join("");
  cardContainer.innerHTML = cardsHTML;
}

module.exports = CreateCards;
