const { Builder, Browser, By, until } = require('selenium-webdriver');

const runSeleniumScript = async () => {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.vinted.fr/');

    // Ajouter un délai explicite pour attendre que le bouton soit présent et cliquable
    const button = await driver.wait(until.elementLocated(By.id('onetrust-accept-btn-handler')), 10000);
    await driver.wait(until.elementIsVisible(button), 10000);
    await driver.wait(until.elementIsEnabled(button), 10000);

    // Cliquer sur le bouton une fois qu'il est disponible
    await button.click();

    await new Promise(resolve => setTimeout(resolve, 5000));
  } finally {
    await driver.quit();
  }
};

module.exports = runSeleniumScript;