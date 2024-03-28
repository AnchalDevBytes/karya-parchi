import TodoList from "@/components/TodoList";
import TodosInput from "@/components/TodosInput";
import Link from "next/link";
import { IoMdArchive } from "react-icons/io";

const HomePage = () => {
  return (
    <div className="h-screen bg-slate-600/40 flex justify-center py-20">
      <div className="flex flex-col gap-20 w-2/6">
        <div className="flex items-center gap-4">
        <TodosInput/>
        <Link href={`/archives`}>
          <IoMdArchive size={28}/>
        </Link>
        </div>
        <TodoList/>
      </div>
    </div>
  );
}

export default HomePage;