import React, { useEffect, useState } from "react";
import { List } from "react-native-paper";
import { View } from "react-native";
import GameListItem from "../components/GameListItem/GameListItem";

const Home = () => {
  const [gamesArray, setGamesArray] = useState([]);
  const fetchGameData = async () => {
    const request = await fetch(`http://localhost:5000/api/games?limit=25`);
    const { games } = await request.json();
    setGamesArray(games);
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <View style={{ overflowY: "auto" }}>
      <List.Section>
        {gamesArray.map((game) => (
          <GameListItem key={game._id["$oid"]} data={game} />
        ))}
      </List.Section>
    </View>
  );
};

export default Home;
