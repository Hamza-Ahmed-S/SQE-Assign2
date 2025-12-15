
from selenium import webdriver
from selenium.webdriver.common.by import By
import time

driver = webdriver.Chrome()
driver.get("file:///path/index.html")

driver.find_element(By.TAG_NAME, "button").click()
time.sleep(1)

buttons = driver.find_elements(By.TAG_NAME, "button")
buttons[0].click()
time.sleep(1)

buttons = driver.find_elements(By.TAG_NAME, "button")
buttons[0].click()
time.sleep(2)

driver.quit()
