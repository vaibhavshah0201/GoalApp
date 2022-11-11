import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [goalList, setGoalList] = useState([]);

  const inputGoalText = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalTolList = () => {
    setGoalList(currentGoalList => [
      ...currentGoalList,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={inputGoalText}
          placeholder="Enter Your goal"
        />
        <Button title="Add Goal" onPress={addGoalTolList} />
      </View>
      <View style={styles.goalListContainer}>
        <FlatList
          data={goalList}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={itemData => {
            return (
              <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '70%',
    padding: 8,
    marginRight: 8,
  },
  goalListContainer: {
    flex: 4,
  },
  goalItem: {
    margin: 8,
    padding: 5,
    borderRadius: 6,
    backgroundColor: 'purple',
  },
  goalText: {
    color: 'white',
  },
});

export default App;
