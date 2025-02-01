import React, {useContext} from "react";
import Todo from "../types/Todo";
import {IconButton, Text, Surface, useTheme} from "react-native-paper";
import {StyleSheet} from "react-native";
import {TodoContext, TodoRepository} from "../Repository/TodosRepository";


const TodoItem = ({todo} : {todo:Todo})  => {
    const todoRepository =  useContext(TodoContext) as TodoRepository;
    let isDone = todo.status === 'done';

    const toggleStatus = () => {
        todo.status = isDone ? 'todo' : 'done';
        todoRepository.upsert(todo);
    }

    const theme = useTheme();
    const Style = StyleSheet.create({
        container: {
            margin: 10,
            padding: 10,
            flexDirection: 'row',
            flexWrap: 'nowrap',
            alignItems: 'center',
        },
        text:{
            flex: 1,
            flexWrap: 'wrap',
            fontSize: 20,
            marginLeft: 5,
        },
        textDone:{
            textDecorationLine: 'line-through',
            fontStyle: 'italic',
        },
        button:{
            borderRadius: 25,
            backgroundColor: theme.colors.onSecondary,
            color: theme.colors.secondary,
        },
        buttonDone:{
            backgroundColor: theme.colors.secondary,
            color: theme.colors.onSecondary,
        }
    })

    return (
        <Surface style={Style.container}>
            <Text style={isDone ?  {...Style.text,...Style.textDone} : Style.text   } >
                {todo.text}
            </Text>
            <IconButton style={Style.button} icon="note-plus" />
            {isDone ? (
                <IconButton style={Style.buttonDone} iconColor={theme.colors.onSecondary} icon="close" onPress={toggleStatus} />
            ):(
                <IconButton style={Style.button} icon="check" onPress={toggleStatus} />
            )}

        </Surface>
    )
};



export default TodoItem;

