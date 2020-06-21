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
                print(stat_val)
                self.type = stat_val
            elif stat_name == "Players":
                stat_val = re.sub(': ', '', stat_val)
                # self.add_players(stat_val)

    def generate_equipment(self, equipment_list):
        for eq in equipment_list:
            text = eq.get_text().lower()
            # If this is an item I care about
            if not re.search('alcohol|beer|liquor|beverage|drink', text):
                # Format it to one of an organized amount of items
                if re.search('quarter|penny|coin', text):
                    self.equipment_cat = "coins"
                    pass
                elif re.search('cards|deck|joker', text):
                    self.equipment_cat = "cards"
                    pass
                elif re.search('ping|pong|cups|solo|cup', text):
                    self.equipment_cat = "cups"
                    pass
                elif re.search('tv', text):
                    self.equipment_cat = "tv"
                    pass
                elif re.search('shot|glasses', text):
                    self.equipment_cat = "shots"
                    pass
                elif re.search('dice|die', text):
                    self.equipment_cat = "dice"
                    pass
                elif re.search('64|ps4|xbox|nintendo', text):
                    self.equipment_cat = "console"
                    pass
                else:
                    self.equipment_cat = "misc"
