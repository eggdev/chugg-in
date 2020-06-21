import os
import requests
import re
from database.config import db
from database.models import Games
from bs4 import BeautifulSoup
import dotenv
dotenv.load_dotenv()
MAIN_DOMAIN = os.getenv("MAIN_DOMAIN")


def handle_individual_game_creation(game_info, game_name):
    new_game = Games(game_name)
    stats = game_info.find_all('li', class_='game-stats')
    if stats:
        new_game.add_stats(stats)
    else:
        print(game_name, 'no stats')

    equipment_list = game_info.find('ul', id='equipment-list')
    if equipment_list:
        new_game.generate_equipment(equipment_list.contents)
    else:
        # print(game_name, 'no equipment')
        pass


def scrape_it_baby(href):
    res = requests.get(f'{MAIN_DOMAIN}/{href}')
    game_name = ''
    try:
        res.raise_for_status()
        game_info = BeautifulSoup(res.text, 'html.parser')
        game_name = game_info.select('.emphasis')[0].contents[0]
        handle_individual_game_creation(game_info, game_name)
    except Exception as exc:
        print('cant scrape game', game_name)


def scan_cats(link):
    res = requests.get(f'{MAIN_DOMAIN}/{link}')
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
