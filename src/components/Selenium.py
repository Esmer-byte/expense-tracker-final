from selenium import webdriver
import selenium
import time
from selenium.webdriver.common.keys import Keys
PATH = "C:\Program Files (x86)\chromedriver.exe"
driver = webdriver.Chrome(PATH)


driver.get("http://localhost:3000/")


def addExpense(title, amount, date):
    robot = driver.find_element_by_id("addNewExpense")
    robot.send_keys(Keys.RETURN)
    robot = driver.find_element_by_id("titleInput")
    robot.send_keys(title)
    robot = driver.find_element_by_id("amountInput")
    robot.send_keys(amount)
    robot = driver.find_element_by_id("dateInput")
    robot.send_keys(date)
    robot = driver.find_element_by_id("expenseSubmit")
    robot.send_keys(Keys.RETURN)


def Inspector():
    inspector = driver.find_element_by_id("selectExpense")
    inspector.send_keys(Keys.ARROW_DOWN)
    time.sleep(1)
    inspector.send_keys(Keys.ARROW_UP)
    time.sleep(1)
    inspector.send_keys(Keys.ARROW_UP)
    time.sleep(1)
    inspector.send_keys(Keys.ARROW_UP)


addExpense("Suc", "12", "12122020")
addExpense("Tigari", "25", "11122021")
addExpense("Cumparaturi", "109", "11122020")
addExpense("Haine", "145", "10122021")
addExpense("Fast Food", "150", "09122020")
addExpense("Gaming", "1200", "08122019")


Inspector()


time.sleep(2)
driver.quit()
