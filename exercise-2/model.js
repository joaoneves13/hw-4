const Sequelize = require("sequelize");
const db = require("./db");

const Movies = db.define("Movies", {
  title: Sequelize.STRING,
  yearOfRelease: Sequelize.INTEGER,
  synopsis: Sequelize.STRING
});

db.sync()
  .then(() =>
    Promise.all([
      Movies.create({
        title: "Toy Story 4",
        yearOfRelease: 2019,
        synopsis:
          "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy."
      }),
      Movies.create({
        title: "Blow",
        yearOfRelease: 2001,
        synopsis:
          "The story of how George Jung, along with the Medellín Cartel headed by Pablo Escobar, established the American cocaine market in the 1970s in the United States."
      }),
      Movies.create({
        title: "Django",
        yearOfRelease: 2012,
        synopsis:
          "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner."
      })
    ])
  )
  .catch(console.error);

module.exports = Movies;
