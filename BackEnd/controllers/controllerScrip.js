const runSeleniumScript = require('../../Bot/Bot_vinted');

const runBot = async (req, res) => {
    try {
        await runSeleniumScript();
        res.send('Bot executed successfully');
    } catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};

module.exports = { runBot };