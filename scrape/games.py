import requests
from bs4 import BeautifulSoup
domain = "https://drinkinggamezone.com"


def scrape_it_baby(href):
    res = requests.get(f'{domain}/{href}')
    try:
        res.raise_for_status()
        game_info = BeautifulSoup(res.text, 'html.parser')
        print(type(game_info))
    except Exception as exc:
        print('cant scrape game')


def scan_cats(link):
    res = requests.get(f'{domain}/{link}')
    try:
        res.raise_for_status()
        categories = BeautifulSoup(res.text, 'html.parser')
        games_list = categories.select('.list-game-card')
        for game in games_list:
            link = game.select('a')
            href = link[0].attrs["href"]
            scrape_it_baby(href)
    except Exception as exc:
        print('problemo getting link')
