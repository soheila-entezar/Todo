import Image from "next/image";
import AddToDO from "@/components/AddToDo/AddToDO";
import ToDoList from "@/components/ToDoList/ToDoList";


export default function Home() {
  return (
    <>
      <div className="h-screen   flex justify-center items-center">
        <div className="w-[50%] min-h-[300px]">
          {/* //first row */}
          <div className=" min-h-[100px] flex justify-between ">
      <div className="w-[47%] border border-[#e4e4e7]  rounded-md ">نمودار</div>
     <AddToDO/>
    </div>
          {/* //second row */}
          <ToDoList/>
        </div>
      </div>
    </>
  );
}
