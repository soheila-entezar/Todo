import Image from "next/image";
import AddToDO from "@/components/AddToDo/AddToDO";
import ToDoList from "@/components/ToDoList/ToDoList";
import SuccessChart from "@/components/SuccessChart/SuccessChart";

export default function Home() {
  return (
    <>
      <div className="h-screen   flex justify-center items-center">
        <div className="w-[90%] md:w-[50%] min-h-[300px]">
          {/* //first row */}
          <div className=" min-h-[100px] flex flex-wrap justify-between ">
            <div className="w-[100%] md:w-[47%] max-h-[100px] mt-2 border border-[#e4e4e7]  rounded-md  ">
              <SuccessChart />
            </div>
            <AddToDO />
          </div>
          {/* //second row */}
          <ToDoList />
        </div>
      </div>
    </>
  );
}
