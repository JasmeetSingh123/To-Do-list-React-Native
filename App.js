import { useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredTodo, setEnteredTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredTodo(enteredText);
  }

  function addTodoHandler() {
    setTodoList((list) => [...list, enteredTodo]);
   
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="enter todos"
          onChangeText={goalInputHandler}
        ></TextInput>
        <Button title="set todos" onPress={addTodoHandler}></Button>
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView >
        {todoList.map((todo) => (
          <Text style={styles.goalItem} key={todo}>{todo}</Text>
        ))}
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  goalsContainer: {
    flex: 4,
  },

  goalItem:{
    margin:8,
    padding:8,
    borderRadius:6,
    backgroundColor:'#5e0acc',
    color:'white',
  }
});
