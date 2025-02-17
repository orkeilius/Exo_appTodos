import {Status, Todo} from "../types/Todo";
import {TodoContext, TodoRepository} from "../Repository/TodosRepository";
import React, {useContext, useEffect, useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {SegmentedButtons, TextInput } from "react-native-paper";


const DetailScreen = (props:any) => {
    const todoRepository: TodoRepository = useContext(TodoContext) as TodoRepository;
    const [todo,setTodo] = useState(todoRepository.todos.find((todo) => todo.id === props.route.params.id) as Todo);

    useEffect(() => {
        var timeout = setTimeout(updateRepo, 500);
        return () => clearTimeout(timeout);
    }, [todo]);

    const updateRepo = () =>{
        todoRepository.upsert(todo)
    }


    // @ts-ignore
    return (
        <View >
            <ScrollView style={styles.screen}>
                <TextInput style={styles.titre}
                    onChangeText={(e) => setTodo({...todo,title: e})}
                    value={todo.title}
                />
                <SegmentedButtons
                    value={todo.status}
                    onValueChange={(status) => {setTodo({...todo, status: status as Status})}}
                    buttons={[
                        {value: 'done', label: 'Done'},
                        {value: 'inProgress', label: 'In Progress'},
                        {value: 'todo', label: 'Todo'}
                    ]}

                />
                <TextInput style={styles.body} mode="outlined"
                    multiline={true}
                    value={todo.text? todo.text:""}
                   onChangeText={(e) => setTodo({...todo,text: e})}
                />
            </ScrollView>
        </View>
    )
};
const styles = StyleSheet.create({
    screen: {
        margin: 10,
    },
    titre: {
        marginBottom:10
    },
    body:{
        marginTop: 10,
        minHeight: 200,
        paddingVertical: 10,
    }
})




export default DetailScreen;