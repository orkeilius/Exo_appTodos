import {createContext, useMemo, useState} from "react";
import Todo from "../types/Todo";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const TodoContext = createContext<TodoRepository | undefined>(undefined);

export function TodoContextProvider(props: any) {
    const [todos, setTodos] = useState<Todo[]>([]);



    const upsert = (todo: Todo) => {
        if (todo.id === null) {
            todo.id = getMaxId() + 1;
        }
        // @ts-ignore
        let newTodo = [...todos.filter(t => t.id !== todo.id), todo].sort((a, b) => a.id - b.id)
        setTodos(newTodo);
        save(newTodo);
    }


    const remove = (todo: Todo) => {
        setTodos([...todos.filter(t => t.id !== todo.id)]);
    }

    const save = async(todos : Todo[]) => {
        try {
            await AsyncStorage.setItem('todo', JSON.stringify(todos));
        } catch (e){
            console.error(e);
        }
    }

    const load = async (): Promise<Todo[]> => {
       try {
           const elem = await AsyncStorage.getItem('todo');
           if(elem === null) return [];
           return JSON.parse(elem);
       } catch (e) {
           console.error(e)
           return [];
       }
    }

    const getMaxId = (): number => {
        console.log(todos);
        if (todos.length == 0) return 0;

        return Math.max(...todos.map(todo => todo.id ?? 0));
    }

    useState(() => {
        load().then((todos) => setTodos(todos));
    })

    const publicFonction = {upsert, remove};

    const value = useMemo(() => ({todos, ...publicFonction}),[todos]);

    return (
        <TodoContext.Provider value={value}>
            {props.children}
        </TodoContext.Provider>

    )

}

export type TodoRepository = {
    todos: Todo[];
    upsert: (todo: Todo) => void;
    remove: (todo: Todo) => void;
}