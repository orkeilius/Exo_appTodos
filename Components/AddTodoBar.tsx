import {useState} from "react";
import {StyleSheet, View} from "react-native";
import {IconButton, TextInput, useTheme} from "react-native-paper";
import Todo from "../types/Todo";

function AddTodoBar({todoListSetter}: Readonly<{ todoListSetter: Function }>) {
    const [Input, setInput]= useState<string>("");

    const send = () => {
        todoListSetter(new Todo(0,Input,false));
        setInput("");
    }

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
                value={Input}
                onChangeText={text => setInput(text)}
                onSubmitEditing={send}
            />
            <IconButton icon={"plus"} iconColor={theme.colors.onPrimary} style={styles.button} onPress={send}/>
        </View>
    )
}



export default AddTodoBar;