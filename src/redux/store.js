const { configureStore } = require("@reduxjs/toolkit");
import todoReducer from "./slices/TodoSlice.js"

export const Store = configureStore({
    reducer :{
        todo: todoReducer,
    }
})