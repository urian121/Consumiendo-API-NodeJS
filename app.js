import express from "express"; //Framework express
import cors from "cors"; //Para permitir o restringir las solicitudes HTTP realizadas desde un origen
import axios from "axios"; //Para hacer solicitudes HTTP

// Creando una nueva aplicación Express.
const app = express();
app.use(cors());

// Configurar middleware que analiza el cuerpo de las solicitudes JSON.
app.use(express.json()); // Para analizar JSON en el cuerpo de las solicitudes
app.use(express.urlencoded({ extended: true })); // Para analizar datos de formulario en el cuerpo de las solicitudes

// Para servir archivos estáticos.
app.use("/public", express.static("public"));

/**
 * Establecer EJS como el Motor de plantillas
 */
app.set("view engine", "ejs");
app.set("views", "./views");

/**
 * Usamos async para indicar que queremos usar await dentro de la función.
 * Luego, utilizamos await antes de la llamada a axios.get(url)
 * para esperar a que la solicitud a la API se complete y obtengamos la respuesta.
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

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Servidor en http://127.0.0.1:${PORT}`);
});
