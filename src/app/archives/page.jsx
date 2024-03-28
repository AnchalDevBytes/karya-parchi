"use client"

import Todo from "@/components/Todo";
import { deleteFromArchive } from "@/redux/slices/TodoSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const ArchivesPage = () => {


    const archives = useSelector((state) => state.todo.archives)
    
    const dispatch = useDispatch();

    const deleteHandler = ({id}) => {
        dispatch(deleteFromArchive({id : id}));
    }


    return (
        <div className="flex items-center justify-center py-20 bg-slate-600/40 h-screen w-full">
            <div className="h-[80%] w-2/6 border border-blue-300 rounded-xl ">
               <div className="h-full flex items-center flex-col">
                    <h1 className="text-center py-10 text-2xl font-bold tracking-widest">Archives</h1>
                    {
                        archives.length > 0 ? (
                            <div className="overflow-y-scroll scroll-hide flex flex-col gap-5 px-10 w-full mx-10">
                                {
                                    archives.map((todo) => (
                                        <Todo 
                                            key={todo.id} 
                                            todo={todo}
                                            onDelete={deleteHandler}
                                            onToggleComplete={null}
                                        />
                                    ))
                                }
                            </div>
                        ) : (
                            <div className="flex gap-4 items-center justify-center">
                                <p className="text-xl animate-pulse font-light tracking-wider">Nothing is in Archives</p>
                                <Link href = {`/`} className="text-blue-600"> Go to home </Link>
                            </div>
                        )
                    }
               </div>
            </div>
        </div>
    );
}

export default ArchivesPage;