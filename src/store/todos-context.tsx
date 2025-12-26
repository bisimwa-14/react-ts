import React from "react";
import Todo from "../models/todo";

type TodosContextObj = {
    items: Todo[];
    addTodo: (text: string) => void;
    removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
    items: [],
    addTodo: (text: string) => {},
    removeTodo: (id: string) => {}
});

type TodosContextProviderProps = {
    children: React.ReactNode;
};

const TodosContextProvider: React.FC<TodosContextProviderProps> = (props) => { 
    
    const [todos, setTodos] = React.useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const newTodo = new Todo(text);

        setTodos((prev) => {
            return prev.concat(newTodo);
        });
    };

    const removeTodoHandler = (todoId: string) => {
        setTodos((prev) => {
            return prev.filter((todo) => todo.id !== todoId);
        });
    };

    const contextValue: TodosContextObj = {
        items: todos,
        addTodo: addTodoHandler,
        removeTodo: removeTodoHandler
    };

    return (
        <TodosContext.Provider
            value={contextValue}
        >
            {props.children}
        </TodosContext.Provider>
    );
}

export default TodosContextProvider;