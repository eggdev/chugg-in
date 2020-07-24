import React, { useState } from "react";
import { Title, Card, TextInput, Chip, List, Button } from "react-native-paper";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

const CreateGame = () => {
  const [gameDetails, setGameDetails] = useState({
    name: "Kings",
    description: "",
    max_players: "",
    min_players: "2",
    equipment_cat: "cards",
    creator: "chugger",
    setup: ["Drink"],
    rules: ["Ace"],
  });
  const [currentStep, setCurrentStep] = useState("");
  const [currentRule, setCurrentRule] = useState("");

  const handleChanges = (id, value) => {
    setGameDetails({
      ...gameDetails,
      [id]: value,
    });
  };

  const handleRemoveFromList = (id, value) => {
    setGameDetails({
      ...gameDetails,
      [id]: gameDetails[id].filter((item) => item !== value),
    });
  };

  const handleListPopulation = (id, value) => {
    if (!gameDetails[id].includes(value) && value !== "") {
      setGameDetails({
        ...gameDetails,
        [id]: [...gameDetails[id], value],
      });
      if (currentStep !== "") setCurrentStep("");
      if (currentRule !== "") setCurrentRule("");
    }
  };

  const handleCreateGame = async () => {
    const req = await fetch("http://localhost:5000/api/game", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...gameDetails }),
    });
    const res = await req.json();
    console.log(res);
  };

  const availableCategories = [
    "cards",
    "console",
    "cups",
    "dice",
    "other",
    "none",
  ];

  return (
    <ScrollView>
      <Card style={cardStyles.container}>
        <Title>Create New Game</Title>
        <TextInput
          style={inputStyles.input}
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
            maxLength={2}
            label="Min Players"
            value={gameDetails.min_players}
          />
          <TextInput
            dense
            style={playersInputStyles.input}
            keyboardType="numeric"
            maxLength={2}
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
            <List.Item
              key={step}
              title={step}
              right={(props) => (
                <TouchableOpacity
                  onPress={() => handleRemoveFromList("setup", step)}
                >
                  <List.Icon {...props} icon="close" />
                </TouchableOpacity>
              )}
            />
          ))}
          <TextInput
            dense
            onChangeText={(val) => setCurrentStep(val)}
            label="Setup"
            mode="outlined"
            style={inputStyles.input}
            value={currentStep}
            placeholder="e.g. 10 cups touching in triangle shape"
            returnKeyType="next"
            onSubmitEditing={() => handleListPopulation("setup", currentStep)}
          />
        </View>
        <Title>When to drink</Title>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <View>
            {gameDetails.rules.map((rule) => (
              <List.Item
                key={rule}
                title={rule}
                right={(props) => (
                  <TouchableOpacity
                    onPress={() => handleRemoveFromList("rules", rule)}
                  >
                    <List.Icon {...props} icon="close" />
                  </TouchableOpacity>
                )}
              />
            ))}
            <TextInput
              dense
              onChangeText={(val) => setCurrentRule(val)}
              label="Rule"
              mode="outlined"
              style={inputStyles.input}
              value={currentRule}
              placeholder="e.g. Ace: Waterfall"
              returnKeyType="next"
              onSubmitEditing={() => handleListPopulation("rules", currentRule)}
            />
          </View>
        </KeyboardAvoidingView>
        <Card.Actions style={cardStyles.actions}>
          <Button onPress={handleCreateGame} mode="contained">
            Create Game
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
};

const cardStyles = StyleSheet.create({
  container: {
    padding: 10,
    minHeight: "100%",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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

const inputStyles = StyleSheet.create({
  input: {
    marginBottom: 10,
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
