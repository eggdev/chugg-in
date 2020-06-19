import requests
from bs4 import BeautifulSoup
from games import scan_cats


def main():
    res = requests.get('https://drinkinggamezone.com/')
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
