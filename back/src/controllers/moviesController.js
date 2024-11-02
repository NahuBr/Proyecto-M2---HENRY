const moviesService = require("../services/moviesService");

module.exports = {
  getController: async (req, res) => {
    const movies = await moviesService.getMovies();
    res.status(200).json(movies);
  },
  postController: async (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const newMovie = await moviesService.createMovie({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    res.status(201).json(newMovie);
  },
};
