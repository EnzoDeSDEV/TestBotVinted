const express = require("express");
const app = express();
const cors= require("cors");
const port = 9000; // Vous pouvez changer le port si nécessaire
const pythonRoutes = require("./routes/pythonRoutes");

// Middleware pour gérer les requêtes JSON
app.use(express.json());
app.use(cors());

//Utiliser les routes python
app.use("/api/run-python", pythonRoutes)

app.listen(port, () => {
    console.log(`Serveur Express en écoute sur le port ${port}`);
  });