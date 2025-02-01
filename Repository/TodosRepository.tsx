import {createContext, useEffect, useMemo, useState} from "react";
import Todo from "../types/Todo";

export const TodoContext = createContext<TodoRepository | undefined>(undefined);

export function TodoContextProvider(props:any) {
    const [todos, setTodos] = useState<Todo[]>([]);

    const upsert = (todo:Todo) =>{
        if (todo.id === null){
            todo.id = getMaxId() + 1;
        }
        setTodos([...todos.filter(t => t.id !== todo.id),todo]);
    }



    const remove = (todo:Todo) => {
        setTodos([...todos.filter(t => t.id !== todo.id),todo]);
    }

    const save = () =>{
        //TODO
    }

    const load = ():Todo[] => {
        //TODO
        return [];
    }

    const getMaxId = ():number =>{
        if (todos.length === 0) return 0;

        return Math.max(...todos.map(todo => todo.id ?? 0 ));
    }

    useEffect(save,[todos]);

    const Value = useMemo<TodoRepository>(() => ({todos,upsert,remove}),[todos]);

   return (
       <TodoContext.Provider value={Value}>
           {props.children}
       </TodoContext.Provider>

   )

}
export type TodoRepository = {
    todos: Todo[];
    upsert: (todo: Todo) => void;
    remove: (todo: Todo) => void;
}