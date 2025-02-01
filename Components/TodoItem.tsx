import React from "react";
import Todo from "../types/Todo";
import {Card,Button} from "react-native-paper";
import {StyleSheet} from "react-native";


const TodoItem = ({todo} : {todo:Todo})  => {
    return (
        <Card style={Style.container}>
            <Card.Title title={todo.text} />
            <Card.Actions>

                <Button>remove</Button>
            </Card.Actions>
        </Card>
    )
};

const Style = StyleSheet.create({
    container: {
        margin: 10,
        padding: 10
    }
})

export default TodoItem;

