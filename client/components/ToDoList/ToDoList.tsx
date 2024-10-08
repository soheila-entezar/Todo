import { GoTrash } from "react-icons/go";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { TfiBackRight } from "react-icons/tfi";

function ToDoList() {
  return (
    <>
    {/* in progress */}
      <div className="w-[100%] mt-6 border border-[#e4e4e7] rounded-md">
        <div className="w-[100%] my-2 flex flex-wrap justify-center">
          <h2 className="w-[97%] min-h-[10px] flex justify-end text-[12px] font-semibold text-[#212121]">در حال انجام</h2>
          <ul className="w-[100%] flex flex-wrap justify-center">
            <li className="w-[97%] flex justify-between items-center min-h-[30px] border-b-[1px] border-[#e4e4e7]">
              <button className="w-[4%] min-h-[20px] text-[14px] text-[#22272f]  flex justify-center items-center border border-[#e4e4e7] rounded-[4px]">
                <GoTrash />
              </button>
              <div className="w-[85%] flex justify-end  items-center text-[14px]">
                <div className="w-[85%] text-[10px] flex justify-end text-[#626c7b] font-semibold">تسک شماره 1</div>
                <div className=" w-[6%] text-[14px] flex justify-center text-[#818a98]">

                  <RiCheckboxBlankCircleLine />
                </div>
              </div>
            </li>
            <li className="w-[97%] flex justify-between items-center min-h-[40px] border-b-[1px] border-[#e4e4e7]">
              <button className="w-[4%] min-h-[20px] text-[14px] text-[#22272f]  flex justify-center items-center border border-[#e4e4e7] rounded-[4px]">
                <GoTrash />
              </button>
              <div className="w-[85%] flex justify-end  items-center text-[14px]">
                <div className="w-[85%] text-[10px] flex justify-end text-[#626c7b] font-semibold">تسک شماره 2</div>
                <div className=" w-[6%] text-[14px] flex justify-center text-[#818a98]">
                  <RiCheckboxBlankCircleLine />
                </div>
              </div>
            </li>
          </ul>
          <div className="w-[97%] min-h-[30px] bg-[#f3f4f6] flex justify-between items-center px-4">
            <button className="w-[3%] h-[50%] flex justify-center items-center text-[11px] font-semibold bg-[#94a3b8] rounded-[4px]"><TfiBackRight /></button>
            <span className="w-[85%] text-[9px] text-[#626c7b] font-semibold flex justify-end">ثانیه برای بازگرداندن فرصت دارید </span>
          </div>
        </div>
      </div>

      {/* done */}
      <div className="w-[100%] min-h-[50px] flex flex-wrap items-center mt-6 border border-[#e4e4e7] rounded-md">
            <h2 className="w-[97%] min-h-[10px] flex justify-end text-[12px] font-semibold text-[#212121]">انجام شده</h2>
            <div className="w-[97%] min-h-[10px] my-3 text-[9px] text-[#c9cdd3] font-semibold flex justify-end">در این بخش هیچ ایتمی وجود ندارد</div>
            <ul className="w-[100%] flex flex-wrap justify-center">
            <li className="w-[97%] flex justify-between items-center min-h-[30px] ">
              <div className="w-[100%] flex justify-end  items-center text-[14px]">
                <div className="w-[85%] text-[10px] flex justify-end text-[#626c7b] font-semibold">تسک شماره 1 انجام شد</div>
                <div className=" w-[6%] text-[14px] flex justify-center text-[#818a98]">
                  <RiCheckboxBlankCircleLine />
                </div>
              </div>
            </li>
            <li className="w-[97%] min-h-[30px] flex justify-between items-center  ">
              <div className="w-[100%] flex justify-end  items-center text-[14px]">
                <div className="w-[85%] text-[10px] flex justify-end text-[#626c7b] font-semibold">تسک شماره 2 انجام شد</div>
                <div className=" w-[6%] text-[14px] flex justify-center text-[#818a98]">
                  <RiCheckboxBlankCircleLine />
                </div>
              </div>
            </li>
            </ul>
        </div>
    </>
  );
}
export default ToDoList;
