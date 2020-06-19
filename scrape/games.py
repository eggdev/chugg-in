import requests
import re
from bs4 import BeautifulSoup
domain = "https://drinkinggamezone.com"


def handle_individual_game_creation(game_info):
    stats = game_info.select('.game-stats')
    for st in stats:
        stat_name = st.select("strong")[0].contents[0]
        stat_val = st.contents[1]
        if stat_name == "Type" or stat_name == "Players":
            stat_val = re.sub(': ', '', stat_val)
            print(stat_name, stat_val)


def scrape_it_baby(href):
    res = requests.get(f'{domain}/{href}')
    try:
        res.raise_for_status()
        game_info = BeautifulSoup(res.text, 'html.parser')
        handle_individual_game_creation(game_info)
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
