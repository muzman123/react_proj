from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from bs4 import BeautifulSoup as bs
import re as re
import time
import pandas as pd

#PATH = input("Enter Webdriver path: ")
#USERNAME = input("Enter username: ")
#PASSWORD = input("Enter password: ")
#print(PATH)
#print(USERNAME)
#print(PASSWORD)

driver = webdriver.Chrome()

driver.get("https://www.linkedin.com/uas/login")
time.sleep(3)

email=driver.find_element("username")
#email.send_keys(USERNAME)
password=driver.find_element("password")
#password.send_keys(PASSWORD)
time.sleep(3)
password.send_keys(Keys.RETURN)