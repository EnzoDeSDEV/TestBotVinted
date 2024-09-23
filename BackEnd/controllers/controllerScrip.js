const runSeleniumScript = require('../../Bot/Bot_vinted');

const runBot = async (req, res) => {
    try {
        await runSeleniumScript();
        res.send('Le bot a fais ca recherche');
    } catch (error) {
        console.error(error);
        res.status(500).send("Le bot a subis un probleme");
    }
};

module.exports = { runBot };