import generateTime from "@/utils/generateTime";

const { createSlice, nanoid } = require("@reduxjs/toolkit");

const initialState = {
    todos : [],
    archives : [],
    isModelVisible : false
}

const TodoSlice = createSlice({
    name:"Todo",
    initialState,
    reducers:{
        setVisibleModel : (state, action) => {
            state.isModelVisible = action.payload
        },
        addTodo : (state, action) => {
            state.todos.push({
                timeOfCreation : generateTime(Date.now()),
                id : nanoid(),
                msg : action.payload.msg,
                completed : false
            });
            // state.todos.sort((a, b) => a.time - b.time);
        },
        ToggleComplete: (state, action) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id);
            if(todo) {
                todo.completed = !todo.completed;
                // state.todos.sort((a, b) => a.time - b.time);
            }
        },
        deleteTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
        },
        addToArchives : (state, action) => {
            const todoToMove = state.todos.find((todo) => todo.id === action.payload.id);
            if(todoToMove) {
                state.archives.push(todoToMove);
                state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
            }
        },
        deleteFromArchive : (state, action) => {
            state.archives = state.archives.filter((todo) => todo.id !== action.payload.id)
        }
    }
})

export const {addTodo, ToggleComplete, deleteTodo, deleteFromArchive, addToArchives, setVisibleModel} = TodoSlice.actions;
export default TodoSlice.reducer;