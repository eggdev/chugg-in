import React from "react";
import { List } from "react-native-paper";
import { Text, TouchableOpacity } from "react-native";

const GameListItem = ({ data, onGamePress }) => {
  const handleDelete = async () => {
    console.log("here");
    // const req = await fetch(`http://localhost:5000/api/games/${data._id}`, {
    //   method: "DELETE",
    // });
    // const res = await req.json();
    // console.log(res);
  };
  return (
    <List.Item
      title={
        <Text>
          {data.name} | Cat: {data.equipment_cat}
        </Text>
      }
      onPress={() => onGamePress(data._id)}
      description={data.description}
      right={(props) => (
        <TouchableOpacity onPress={handleDelete}>
          <List.Icon {...props} icon="close" />
        </TouchableOpacity>
      )}
    />
  );
};

export default GameListItem;
