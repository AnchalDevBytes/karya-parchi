"use client";

import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import { deleteTodo } from "@/redux/slices/TodoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const deleteHandler = ({ id }) => {
    dispatch(deleteTodo({ id: id }));
  };

  return (
    <div className="h-[80%]">
      {todos.length > 0 ? (
        <div className="flex flex-col h-full gap-5 px-10 overflow-y-scroll scroll-hide">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center h-full ">
          <p className="text-xl font-light tracking-wider animate-pulse">
            Your list is empty{" "}
          </p>
        </div>
      )}
    </div>
  );
};

export default TodoList;
