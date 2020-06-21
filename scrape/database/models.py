from bs4 import BeautifulSoup
import re


class Games:
    def __init__(self, name):
        self.name = name
        self.creator = 'chugger'

    def add_players(self, players):
        print('p', players)

    def add_stats(self, stats):
        for st in stats:
            stat_name = st.select("strong")[0].contents[0]
            stat_val = st.contents[1]
            if stat_name == "Type":
                stat_val = re.sub(': ', '', stat_val)
                self.category = stat_val
            elif stat_name == "Players":
                stat_val = re.sub(': ', '', stat_val)
                # self.add_players(stat_val)

    def generate_equipment(self, equipment_list):
        for eq in equipment_list:
            text = eq.get_text().lower()
            print(text, re.search('alcohol|beer|liqour|beverage', text))
