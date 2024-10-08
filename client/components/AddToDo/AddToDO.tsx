import React from "react";

function AddToDO() {
  return (
    <form  className=" w-[47%]  border border-[#e4e4e7]  flex flex-wrap justify-around items-center rounded-md">
      <div className="w-[90%] h-[20%] flex justify-end text-[13px] font-semibold">افزودن تسک جدید </div>
      <button type="submit" className="w-[30%] h-[35%] text-[10px] bg-[#4338ca] text-white rounded-md flex justify-center items-center ">
        افزودن
      </button>
      <input type="text" name="task" id="" style={{direction:'rtl'}} className="w-[55%] h-[35%] placeholder:text-[12px] px-2 outline-none border border-[#e4e4e7] rounded-md " placeholder="امروز میخوام..."/>
    </form>
  );
}

export default AddToDO;
