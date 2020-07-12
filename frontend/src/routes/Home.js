import React, { useEffect, useState } from "react";
import GamesList from "../components/GamesList/GamesList";
import { View } from "react-native";

const Home = () => {
  const [gamesArray, setGamesArray] = useState([]);
  const fetchGameData = async () => {
    const request = await fetch(`http://localhost:5000/api/games`);
    const { games } = await request.json();
    setGamesArray(games);
  };

  useEffect(() => {
    fetchGameData();
  }, []);

  return (
    <View style={{ overflowY: "auto" }}>
      <GamesList games={gamesArray} />
    </View>
  );
};

export default Home;
