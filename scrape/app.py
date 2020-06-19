import requests
from bs4 import BeautifulSoup

res = requests.get('https://drinkinggamezone.com/')
try:
    res.raise_for_status()
    soup_home = BeautifulSoup(res.text, 'html.parser')
    links = soup_home.select('.home-category-link')
    print(links)
except Exception as exc:
    print('there was a problem?')
    # Slack bot or text or something notification to me
