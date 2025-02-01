import React, {useContext} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import NoteItem from "../Components/TodoItem";
import Todo from "../types/Todo";
import AddTodoBar from "../Components/AddTodoBar";
import {TodoRepository, TodoContext} from "../Repository/TodosRepository";

const TodoScreen = () => {
    const todoRepository: TodoRepository = useContext(TodoContext) as TodoRepository;
    const todos: Todo[] = todoRepository.todos;

    return (
        <View style={styles.screen}>
            <ScrollView>
                {todos.map((todo) => (
                    <NoteItem key={todo.pos} todo={todo}/>
                ))}
            </ScrollView>
            <AddTodoBar/>
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