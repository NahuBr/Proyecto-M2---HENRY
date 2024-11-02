const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://nahuebr01:Nahue3142@movies.whooglt.mongodb.net/MoviesDB?retryWrites=true&w=majority&appName=Movies"
  );
};

module.exports = dbCon;
