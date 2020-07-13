import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Title, Subheading, Card } from "react-native-paper";

const IndividualGame = ({ route }) => {
  const { id } = route.params;
  const [gameData, setGameData] = useState(null);
  const fetchIndividualGame = async () => {
    const request = await fetch(`http://localhost:5000/api/games/${id}`);
    const response = await request.json();
    setGameData(response.game);
  };

  useEffect(() => {
    fetchIndividualGame();
  }, [id]);

  return (
    <View>
      {gameData && (
        <Card style={styles.container}>
          <Title>{gameData.name}</Title>
          <Subheading>{gameData.description}</Subheading>
        </Card>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default IndividualGame;
