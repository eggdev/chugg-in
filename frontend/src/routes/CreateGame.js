import React, { useState } from "react";
import { Title, Text, Card, TextInput, Chip } from "react-native-paper";
import { ScrollView, View, StyleSheet } from "react-native";

const CreateGame = () => {
  const [gameDetails, setGameDetails] = useState({
    name: "",
    description: "",
    max_players: "0",
    min_players: "2",
    equipment_cat: "",
    creator: "chugger",
    setup: [],
    rules: [],
  });
  const [currentStep, setCurrentStep] = useState("");
  const [currentRule, setCurrentRule] = useState("");

  const handleChanges = (id, value) => {
    setGameDetails({
      ...gameDetails,
      [id]: value,
    });
  };

  const handleListPopulation = (id, val) => {
    setCurrentStep("");
    setGameDetails({
      ...gameDetails,
      [id]: [...gameDetails[id], val],
    });
  };

  const availableCategories = [
    "cards",
    "dice",
    "cups",
    "console",
    "none",
    "other",
  ];

  return (
    <ScrollView>
      <Card style={cardStyles.container}>
        <Title>Create New Game</Title>
        <TextInput
          onChangeText={(val) => handleChanges("name", val)}
          label="Name"
          mode="outlined"
          dense
          value={gameDetails.name}
        />
        <View style={playersInputStyles.container}>
          <TextInput
            dense
            style={playersInputStyles.input}
            keyboardType="numeric"
            onChangeText={(val) => handleChanges("min_players", val)}
            mode="outlined"
            label="Min Players"
            value={gameDetails.min_players}
          />
          <TextInput
            dense
            style={playersInputStyles.input}
            keyboardType="numeric"
            onChangeText={(val) => handleChanges("max_players", val)}
            mode="outlined"
            label="Max Players"
            value={gameDetails.max_players}
          />
        </View>
        <Title>Equipment</Title>
        <View style={chipStyles.container}>
          {availableCategories.map((cat) => (
            <Chip
              style={chipStyles.chip}
              key={cat}
              selected={gameDetails.equipment_cat === cat}
              textStyle={chipStyles.chipText}
              onPress={() =>
                handleChanges(
                  "equipment_cat",
                  gameDetails.equipment_cat === cat ? "" : cat
                )
              }
            >
              {cat}
            </Chip>
          ))}
        </View>
        <Title>Setup</Title>
        <View>
          {gameDetails.setup.map((step) => (
            <Text key={step}>{step}</Text>
          ))}
          <TextInput
            dense
            onChangeText={(val) => setCurrentStep(val)}
            label="Setup"
            mode="outlined"
            value={currentStep}
            placeholder="e.g. 10 cups touching in triangle shape"
            returnKeyType="next"
            onSubmitEditing={() => handleListPopulation("setup", currentStep)}
          />
        </View>
        <Title>When to drink</Title>
        <View>
          {gameDetails.rules.map((rule) => (
            <Text key={rule}>{rule}</Text>
          ))}
          <TextInput
            dense
            onChangeText={(val) => setCurrentRule(val)}
            label="Rule"
            mode="outlined"
            value={currentRule}
            placeholder="e.g. Ace: Waterfall"
            returnKeyType="next"
            onSubmitEditing={() => handleListPopulation("rules", currentRule)}
          />
        </View>
      </Card>
    </ScrollView>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    padding: 10,
    minHeight: "100%",
  },
});

const playersInputStyles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  input: {
    width: "50%",
  },
});

const chipStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  chip: {
    width: 100,
    margin: 5,
    display: "flex",
    justifyContent: "center",
  },
});

export default CreateGame;
