const { exec } = require('child_process');
const scriptModel = require('../models/scriptModel');

exports.executeScript = (req, res) => {
  scriptModel.runPythonScript((err, output) => {
      if (err) {
          return res.status(500).json({ error: err.message });
      }
      res.status(200).json({ message: 'Script exécuté avec succès', output: output });
  });
};