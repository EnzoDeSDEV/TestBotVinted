const { exec } = require('child_process');

exports.runPythonScript = (callback) => {
    exec('python3 ../../Bot/selenium-env/bot_vinted.py', (error, stdout, stderr) => {
        if (error) {
            return callback(error);
        }
        if (stderr) {
            return callback(new Error(stderr));
        }
        callback(null, stdout);
    });
};