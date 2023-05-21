const axios = require("axios");
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());

/**
 * Middleware para servir archivos estáticos desde la carpeta "public"
 * public-resource funciona como un alias a la carpeta public
 */
app.use("/public-resource", express.static(path.join(__dirname, "public")));

// Establece EJS como el motor de plantillas
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const url = "https://compratucarro.net/Api_Rest/api_jugadores_nba.json";

app.get("/", (req, res) => {
  axios
    .get(url)
    .then((response) => {
      const listaJugadores = response.data.listaJugadores;
      //console.log(listaJugadores);
      // Renderiza el archivo index.ejs con los datos de los jugadores
      res.render("index", { listaJugadores });
    })
    .catch((error) => {
      console.error(error);
    });
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
