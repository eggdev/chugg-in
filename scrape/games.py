import os
import requests
import re
import json
from pprint import pprint
from database.config import db
from database.models import Games
from bs4 import BeautifulSoup
import dotenv
dotenv.load_dotenv()
MAIN_DOMAIN = os.getenv("MAIN_DOMAIN")


def handle_individual_game_creation(game_info, game_name):
    new_game = Games(game_name)
    # Get Players and Game "Type"
    stats = game_info.find_all('li', class_='game-stats')
    if stats:
        new_game.generate_stats(stats)
    else:
        print(game_name, 'no stats')
    # Generate the equipment category
    equipment_list = game_info.find('ul', id='equipment-list')
    if equipment_list:
        new_game.generate_equipment(equipment_list.contents)
    else:
        new_game.equipment_cat = "none"

    # Description
    summary = game_info.find('h2', id='h2-summary')
    if summary:
        new_game.generate_description(summary)
    else:
        new_game.description = 'No description'
    # Rules
    rules_list = game_info.find('h2', id='h2-rules')
    if rules_list:
        new_game.generate_rules(rules_list)
    else:
        new_game.static_rule = 'No rules provided'

    return new_game


def scrape_it_baby(href):
    res = requests.get(f'{MAIN_DOMAIN}/{href}')
    game_name = ''
    try:
        res.raise_for_status()
        game_info = BeautifulSoup(res.text, 'html.parser')
        game_name = game_info.select('.emphasis')[0].contents[0]
        found = db.games.find_one({'name': game_name})
        if found is None:
            new_game = handle_individual_game_creation(game_info, game_name)
            db.games.insert_one(new_game.__dict__)
        else:
            print(f'{game_name} already in db')

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
