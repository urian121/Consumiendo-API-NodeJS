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

/**
 * En este caso, utilizamos la palabra clave async antes de la función de manejo de la ruta ((req, res) => { ... })
 * para indicar que queremos usar await dentro de la función. Luego, utilizamos await antes de la llamada a axios.get(url)
 * para esperar a que la solicitud a la API se complete y obtengamos la respuesta.
 * Si la solicitud es exitosa, asignamos los datos a la variable listaJugadores y renderizamos la plantilla index.ejs.
 * Si ocurre algún error, lo capturamos y lo mostramos en la consola.
 */
const url_API = "https://compratucarro.net/Api_Rest/api_jugadores_nba.json";
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(url_API);
    const listaJugadores = response.data.listaJugadores;
    res.render("index", { listaJugadores });
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log("Servidor escuchando en el puerto 3000");
});
