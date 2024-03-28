"use client"
import { addTodo } from "@/redux/slices/TodoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IoMdAdd } from "react-icons/io";

const TodosInput = () => {

    const [todo, setTodo] = useState("")
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo) return;
        dispatch(addTodo({msg : todo}))
        setTodo("");
    }

    return (
        <form 
            onSubmit={handleSubmit} 
            className="relative flex w-full"
        >
            <input 
                type="text" 
                placeholder="Add Todos"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                className="py-4 px-10 rounded-full border-none w-full text-black font-semibold"
            />
            <button
                type="submit"
                className="py-4 px-6 bg-blue-600 rounded-r-full absolute right-0 top-0"
            >
                <IoMdAdd size={24} />
            </button>
        </form>
    )
}

export default TodosInput;