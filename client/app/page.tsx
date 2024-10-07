import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="h-screen   flex justify-center items-center">
        <div className="w-[50%] min-h-[300px] border border-[#e4e4e7]  shadow-md rounded-lg">
          {/* //first row */}
          <div className=" min-h-[100px] flex justify-between ">
             <div className="w-[47%] border border-[#e4e4e7]  rounded-md ">bbb</div>
            <div className=" w-[47%] border border-[#e4e4e7]  flex flex-wrap justify-around items-center">
              <div className="w-[90%] flex justify-end">افزودن تسک جدید </div>
              <input type="text" name="task" id="" className="w-[65%]" />
              <button className="w-[20%]  text-[14px] bg-[#7e22ce] text-white rounded-md flex justify-center items-center ">افزودن</button>
            </div>
          </div>

          {/* //second row */}
        </div>
      </div>
    </>
  );
}
