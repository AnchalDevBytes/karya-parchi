import { ToggleComplete, addToArchives, deleteTodo, setVisibleModel } from "@/redux/slices/TodoSlice";
import { useDispatch, useSelector } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";

const Todo = ({todo, deleteHandler}) => {
    const dispatch = useDispatch();
    const showModal = useSelector(state => state.todo.isModelVisible);

    const handleToggleComplete = ({completed}) => {
        dispatch(ToggleComplete({ id: todo.id }));
        if(!completed) dispatch(setVisibleModel(true))
    };

    const handleConfirmDelete = () => {
        dispatch(deleteTodo({id: todo.id}));
        dispatch(setVisibleModel(false));
    };

    const handleCancel = () => {
        dispatch(addToArchives({id: todo.id}));
        dispatch(setVisibleModel(false));
    };

    return (
        <div className="flex justify-between w-full items-center bg-blue-300 px-5 py-3 rounded-xl">
            <div className="flex gap-4 items-center ">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={()=>handleToggleComplete({ completed : todo.completed})}
                />
                <span
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    className="text-lg font-semibold text-fuchsia-900"
                >
                    {todo.msg}
                </span>
            </div>
            <div className="flex gap-4 items-center">
                <span>
                        {todo.timeOfCreation}
                    </span>
                    <button 
                        onClick={()=>deleteHandler({id : todo.id})}
                    >
                        <MdDeleteOutline size={22} fill="red" />
                    </button>
            </div>


            {/* modal  */}
            {showModal && (
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                <div className="bg-white p-8 rounded-md shadow-md">
                    <p className="text-black">Do you want to delete this todo?</p>
                    <div className="flex justify-end mt-4">
                        <button onClick={()=>handleConfirmDelete()} className="mr-4 px-4 py-2 bg-red-500 text-white rounded-md">Yes</button>
                        <button onClick={()=>handleCancel()} className="px-4 py-2 bg-gray-500 text-white rounded-md">No</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
}

export default Todo;