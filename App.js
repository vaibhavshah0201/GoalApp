import React, {useState} from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import GoalInput from './src/components/GoalInput';
import GoalItem from './src/components/GoalItem';

const App = () => {
  const [goalList, setGoalList] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const toggleAddNewGoal = () => {
    setModalIsVisible(!modalIsVisible);
  };

  const addGoalTolList = enteredGoalText => {
    setGoalList(currentGoalList => [
      ...currentGoalList,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
    toggleAddNewGoal();
  };

  const deleteGoalHandler = id => {
    console.log(id);
    setGoalList(currentGoalList => {
      return currentGoalList.filter(item => item.id !== id);
    });
    console.log(goalList);
  };

  return (
    <View style={styles.appContainer}>
      <Button title="Add New Goal" color="#5e0acc" onPress={toggleAddNewGoal} />
      <GoalInput onAddGoal={addGoalTolList} visible={modalIsVisible} onClose={toggleAddNewGoal}/>
      <View style={styles.goalListContainer}> 
        <FlatList
          data={goalList}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          renderItem={itemData => {
            return (
              <GoalItem
                id={itemData.item.id} 
                text={itemData.item.text}
                onDeleteItem={deleteGoalHandler}
              />
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
  goalListContainer: {
    flex: 4,
  },
});

export default App;
