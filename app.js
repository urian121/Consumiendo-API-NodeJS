import express from "express";
import cors from "cors";
import axios from "axios";

// Creando una nueva aplicación Express.
const app = express();
app.use(cors());

// Configurar middleware que analiza el cuerpo de las solicitudes JSON.
app.use(express.json()); // Para analizar JSON en el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formulario en el cuerpo de las solicitudes

app.use("/public", express.static("public"));

/**
 * Establecer EJS como el Motor de plantillas
 */
app.set("view engine", "ejs");
app.set("views", "./views");

const PORT = process.env.PORT || 3001;

/**
 * En este caso, utilizamos la palabra clave async antes de la función de manejo de la ruta ((req, res) => { ... })
 * para indicar que queremos usar await dentro de la función. Luego, utilizamos await antes de la llamada a axios.get(url)
 * para esperar a que la solicitud a la API se complete y obtengamos la respuesta.
 * Si la solicitud es exitosa, asignamos los datos a la variable listaJugadores y renderizamos la plantilla index.ejs.
 * Si ocurre algún error, lo capturamos y lo mostramos en la consola.
 */
const url_API =
  "https://projects.urianviera.com/api_node/api_jugadores_nba.json";
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(url_API);
    const listaJugadores = response.data.listaJugadores;
    res.render("index", { listaJugadores });
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
