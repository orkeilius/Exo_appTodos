import React, {ReactNode} from "react";
import {Button, ScrollView, TextInput, View} from "react-native";
import NoteItem from "../Components/TodoItem";
import Todo from "../types/Todo";

const TodoScreen = () =>  {
    const [notes, setNotes] = React.useState<Todo[]>([]);

    const [textInput,setTextInput] = React.useState<string>('')

    function addNote() {
        setNotes([...notes,new Todo(notes.length,textInput,false)])
        setTextInput('')
        console.log(notes)
    }

    return (
        <View>
            <ScrollView>
                {notes.map((note) => (
                    <NoteItem key={note.pos} />
                ))}
            </ScrollView>
            <View>
                <TextInput value={textInput} onChangeText={text => setTextInput(text)}/>
                <Button title="Add Notes" onPress={addNote}/>
            </View>
        </View>
    )




}

export default TodoScreen;