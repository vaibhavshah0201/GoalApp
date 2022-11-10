import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const App = () => {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Enter Your goal"/>
        <Button title="Add Goal"/>
      </View>
      <View>
        <Text>List of goal</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appContainer:{
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'grey',
    width: '80%',
    padding: 8,
    marginRight: 8
  }

})

export default App;