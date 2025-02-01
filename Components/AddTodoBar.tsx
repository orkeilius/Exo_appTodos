import {useContext, useState} from "react";
import {StyleSheet, View} from "react-native";
import {IconButton, TextInput, useTheme} from "react-native-paper";
import Todo from "../types/Todo";
import {TodoRepository,TodoContext} from "../Repository/TodosRepository";

function AddTodoBar() {
    const todoRepository =  useContext(TodoContext) as TodoRepository;
    const [textInput, setTextInput]= useState<string>("");

    const send = () => {
        todoRepository.upsert(new Todo(textInput,'todo'));
        setTextInput("");
    }
    console.log(todoRepository.todos)

    const theme = useTheme();
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            backgroundColor: theme.colors.primaryContainer,
        },
        input: {
            backgroundColor: theme.colors.surface,
            flex:1
        },
        button:{
            backgroundColor : theme.colors.primary,
            borderRadius: '25%',
        }
    })

    return (
        <View style={styles.container}>
            <TextInput style={styles.input}
                value={textInput}
                onChangeText={text => setTextInput(text)}
                onSubmitEditing={send}
            />
            <IconButton icon={"plus"} iconColor={theme.colors.onPrimary} style={styles.button} onPress={send}/>
        </View>
    )
}



export default AddTodoBar;