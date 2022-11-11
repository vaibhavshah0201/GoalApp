import {useState} from 'react';
import {Button, Modal, StyleSheet, TextInput, View} from 'react-native';

const GoalInput = props => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const inputGoalText = enteredText => {
    setEnteredGoalText(enteredText);
  };

  const addGoalTolList = () => {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={inputGoalText}
          placeholder="Your goal test!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalTolList} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onClose} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding:16,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '100%',
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});
