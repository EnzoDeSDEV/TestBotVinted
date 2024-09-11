const express = require("express");
const router = express.Router();
const pythonController = require("../controllers/pythonController");

// Route pour exécuter le script Python
router.post("/run-python-script", pythonController.runPythonScript);

module.exports = router;