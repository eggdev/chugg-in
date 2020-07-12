import React from "react";
import { List } from "react-native-paper";
import Game from "../Game/Game";

const GamesList = ({ games }) => {
  return (
    <List.Section>
      {games.map((game) => (
        <Game key={game._id["$oid"]} data={game} />
      ))}
    </List.Section>
  );
};

export default GamesList;
