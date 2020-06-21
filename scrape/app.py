import os
from games import scan_cats
from bs4 import BeautifulSoup
import database.config
import requests
import dotenv
dotenv.load_dotenv()

MAIN_DOMAIN = os.getenv("MAIN_DOMAIN")


def main():
    res = requests.get(MAIN_DOMAIN)
    try:
        res.raise_for_status()
        soup_home = BeautifulSoup(res.text, 'html.parser')
        cat_links = soup_home.select('.home-category-link')
        for link in cat_links:
            scan_cats(link.attrs['href'])
    except Exception as exc:
        print('there was a problem?')
        # Slack bot or text or something notification to me
    return


main()
