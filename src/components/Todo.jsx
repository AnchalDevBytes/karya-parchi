"use client";

import {
  ToggleComplete,
  addToArchives,
  deleteTodo,
} from "@/redux/slices/TodoSlice";
import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";

const Todo = ({ todo, deleteHandler }) => {
  const dispatch = useDispatch();
  const [isModelShow, setIsModelShow] = useState(false);

  const handleToggleComplete = ({ completed }) => {
    dispatch(ToggleComplete({ id: completed.id }));
    if (!completed.completed) setIsModelShow(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteTodo({ id: todo.id }));
    setIsModelShow(false);
  };

  const handleCancel = () => {
    dispatch(addToArchives({ id: todo.id }));
    setIsModelShow(false);
  };

  return (
    <div className="flex items-center justify-between w-full px-5 py-3 bg-blue-300 rounded-xl">
      <div className="flex items-center gap-4 ">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => handleToggleComplete({ completed: todo })}
        />
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          className="text-lg font-semibold text-fuchsia-900"
        >
          {todo.msg}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <span>{todo.timeOfCreation}</span>
        <button onClick={() => deleteHandler({ id: todo.id })}>
          <MdDeleteOutline size={22} fill="red" />
        </button>
      </div>

      {/* modal  */}
      {isModelShow && (
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
          <div className="p-8 bg-white rounded-md shadow-md">
            <p className="text-black">Do you want to delete this todo?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 mr-4 text-white bg-red-500 rounded-md"
              >
                Yes
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-2 text-white bg-gray-500 rounded-md"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
