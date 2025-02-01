import React, {ReactNode} from "react";
import {Button, ScrollView, StyleSheet, TextInput, View} from "react-native";
import NoteItem from "../Components/TodoItem";
import Todo from "../types/Todo";
import {FAB} from "react-native-paper";

const TodoScreen = () =>  {
    const [todos, settodos] = React.useState<Todo[]>([]);

    const [textInput,setTextInput] = React.useState<string>('')

    function addNote() {
        settodos([...todos,new Todo(todos.length,textInput,false)])
        setTextInput('')
        console.log(todos)
    }

    return (
        <View style={styles.screen}>
            <ScrollView>
                {todos.map((todo) => (
                <NoteItem key={todo.pos} todo={todo} />
                ))}
            </ScrollView>
            <View>
                <TextInput value={textInput} onChangeText={text => setTextInput(text)}/>
                <Button title="Add Notes" onPress={addNote}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        height: '100%',
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default TodoScreen;