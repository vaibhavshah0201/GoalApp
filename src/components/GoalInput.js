import {useState} from 'react';
import {Button, Image, Modal, StyleSheet, TextInput, View} from 'react-native';

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
        <Image style={styles.image} source={require('../../assets/images/goal.png')} />
        <TextInput
          style={styles.textInput}
          onChangeText={inputGoalText}
          placeholder="Your goal test!"
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalTolList} color='#b180f0'/>
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.onClose} color='#f31282'/>
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
    backgroundColor: '#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    width: 100,
    height: 100,
    margin: 30
  }
});
