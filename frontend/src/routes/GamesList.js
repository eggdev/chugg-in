import React, { useEffect, useState } from "react";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
import GameListItem from "../components/GameListItem/GameListItem";

const GamesList = ({ navigation }) => {
  const [gamesArray, setGamesArray] = useState([]);
  const fetchGameData = async () => {
    const request = await fetch(`http://localhost:5000/api/games?limit=25`);
    const { games } = await request.json();
    setGamesArray(games);
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  const onGamePress = (id) => {
    navigation.push("Game", {
      id: id,
    });
  };

  return (
    <ScrollView>
      <List.Section>
        {gamesArray.map((game) => (
          <GameListItem
            key={game._id["$oid"]}
            data={game}
            onGamePress={onGamePress}
          />
        ))}
      </List.Section>
    </ScrollView>
  );
};

export default GamesList;
