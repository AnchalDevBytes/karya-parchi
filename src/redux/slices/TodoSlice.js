import generateTime from "@/utils/generateTime";

const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    todos : [],
    archives : [],
    isModelVisible : false
}

const sortTodos = (todos) => {
    return todos.slice().sort((a, b) => {
        return new Date(a.timeOfCreation) - new Date(b.timeOfCreation);
    });
};

const TodoSlice = createSlice({
    name:"Todo",
    initialState,
    reducers:{
        setVisibleModel : (state, action) => {
            state.isModelVisible = action.payload
        },
        addTodo : (state, action) => {
            state.todos.unshift({
                timeOfCreation : generateTime(Date.now()),
                id : nanoid(),
                msg : action.payload.msg,
                completed : false
            });
            state.todos = sortTodos(state.todos);
        },
        ToggleComplete: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if(todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
            state.todos = sortTodos(state.todos)
        },
        addToArchives : (state, action) => {
            const todoToMove = state.todos.find((todo) => todo.id === action.payload.id);
            if(todoToMove) {
                state.archives.push(todoToMove);
                state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
            }
            state.todos = sortTodos(state.todos)
            state.archives = sortTodos(state.archives)
        },
        deleteFromArchive : (state, action) => {
            state.archives = state.archives.filter((todo) => todo.id !== action.payload.id)
            state.archives = sortTodos(state.archives)
        }
    }
})

export const {addTodo, ToggleComplete, deleteTodo, deleteFromArchive, addToArchives, setVisibleModel} = TodoSlice.actions;
export default TodoSlice.reducer;