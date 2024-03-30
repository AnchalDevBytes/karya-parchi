"use client";

import Todo from "@/components/Todo";
import { deleteFromArchive } from "@/redux/slices/TodoSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

const ArchivesPage = () => {
  const archives = useSelector((state) => state.todo.archives);

  const dispatch = useDispatch();

  const deleteHandler = ({ id }) => {
    dispatch(deleteFromArchive({ id: id }));
  };

  return (
    <div className="flex items-center justify-center w-full h-screen py-20 bg-slate-600/40">
      <div className="h-[80%] w-2/6 border border-blue-300 rounded-xl ">
        <div className="flex flex-col items-center h-full">
          <h1 className="py-10 text-2xl font-bold tracking-widest text-center">
            Archives
          </h1>
          {archives.length > 0 ? (
            <div className="flex flex-col w-full gap-5 px-10 mx-10 overflow-y-scroll scroll-hide">
              {archives.map((todo) => (
                <Todo key={todo.id} todo={todo} deleteHandler={deleteHandler} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <p className="text-xl font-light tracking-wider animate-pulse">
                Nothing is in Archives
              </p>
              <Link href={`/`} className="text-blue-600">
                {" "}
                Go to home{" "}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchivesPage;
