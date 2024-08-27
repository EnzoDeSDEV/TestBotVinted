import time
from selenium import webdriver 
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Lancement du drivers
driver = webdriver.Chrome()

# Se connecter sur le site
driver.get("https://www.vinted.fr/")

# Attendre jusqu'à ce que le bouton soit cliquable
try:
    buttonAcceptCookie = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.ID, "onetrust-accept-btn-handler"))
    )
    buttonAcceptCookie.click()
except Exception as e:
    print("Une erreur est survenue lors du clic sur le bouton :")
    print(f"Type d'exception : {type(e).__name__}")
    print(f"Message d'erreur : {str(e)}")

# Attendre pour voir la page après le clic
WebDriverWait(driver, 10).until(
    EC.title_contains("Vinted")
)

time.sleep(5)

driver.quit()