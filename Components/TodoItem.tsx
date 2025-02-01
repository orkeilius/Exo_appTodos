import React from "react";
import Todo from "../types/Todo";
import {IconButton, Text, Surface} from "react-native-paper";
import {StyleSheet} from "react-native";


const TodoItem = ({todo} : {todo:Todo})  => {
    let isDone = todo.status === 'done';
    return (
        <Surface style={Style.container}>
            <Text style={isDone ?  {...Style.text,...Style.textDone} : Style.text   } >
                {todo.text}
            </Text>
            <IconButton style={Style.button} icon={"note-plus"} />

        </Surface>
    )
};

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
    }
})

export default TodoItem;

