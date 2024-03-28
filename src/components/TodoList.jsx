"use client"

import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { ToggleComplete, deleteTodo, setVisibleModel } from "@/redux/slices/TodoSlice";

const TodoList = () => {
    
    const todos  = useSelector(state => state.todo.todos);
    const dispatch = useDispatch();

    const handleToggleComplete = ({id, completed}) => {
        dispatch(ToggleComplete({ id: id }))
        console.log(id);
        if(!completed) dispatch(setVisibleModel(true))
    };

    const deleteHandler = ({id}) => {
        dispatch(deleteTodo({id : id}))
    }

    return (
        <div className="h-[80%]">
           {
            todos.length > 0 ? (
                <div className="h-full overflow-y-scroll scroll-hide flex flex-col gap-5 px-10">
                    {
                        todos.map((todo) => (
                            <Todo 
                                key={todo.id} 
                                todo={todo} 
                                handleToggleComplete={handleToggleComplete}
                                deleteHandler={deleteHandler}
                            />
                        ))
                    }
                </div>
            ) : (
                <div className=" flex items-center justify-center h-full">
                    <p className="text-xl animate-pulse font-light tracking-wider">Your list is empty </p>
                </div>
            )
           }
        </div>
    );
}

export default TodoList;