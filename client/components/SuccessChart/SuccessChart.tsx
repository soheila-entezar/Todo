'use client'
import React from 'react';  
import { VictoryPie } from 'victory';  
import useTodoStore from "@/app/store"; // مسیر فایل Zustand خود را وارد کنید  

const TaskStatusChart = () => {  
  // استفاده از Zustand برای دریافت تسک‌ها  
  const { todos } = useTodoStore();  

  // تعداد تسک‌های انجام شده و در حال انجام  
  const completedTasks = todos.filter(todo => todo.completed).length;  
  const inProgressTasks = todos.length - completedTasks;  

  // کل تسک‌ها  
  const totalTasks = todos.length;  

  // محاسبه درصد  
  const completedPercentage = totalTasks ? (completedTasks / totalTasks) * 100 : 0;  
  const inProgressPercentage = totalTasks ? (inProgressTasks / totalTasks) * 100 : 0;  

  // داده‌های نمودار برحسب درصد  
  const data = [  
    { x: `${completedPercentage.toFixed(1)}%`, y: completedPercentage },  
    { x: `${inProgressPercentage.toFixed(1)}%`, y: inProgressPercentage },  
  ];  

  return (  
    <div className='w-full h-full flex flex-wrap justify-between p-2'>  
      <h2 className='w-full h-[20%] flex justify-end text-[12px] font-semibold'>گزارش موفقیت</h2>  
      <div className='w-[100%] h-[70%] flex justify-between'>  
         <div style={{direction:'rtl'}} className='w-[50%] h-[100%] flex flex-wrap'>
            <div className='w-[100%] h-[40%] flex items-end font-semibold text-[13px]'>{completedTasks} از {totalTasks}</div>
            <div className='w-[100%] h-[40%] text-[10px] font-semibold text-[#4e4d4d]'>تسک انجام شده است</div>
        </div>
        <div className='w-[55%] min-h-[100px] flex items-end justify-center '>  
       
        <VictoryPie  
          data={data}  
          colorScale={["#2dd4bf", "#0c4a6e"]}  
          innerRadius={70} // برای ایجاد نمودار توخالی  
          labelRadius={90}  
          style={{  
            labels: {  
              fontSize: 30,  // می‌توانید اندازه فونت را اینجا تنظیم کنید  
              fill: "#fafafa",  
            },  
          }}  
          // تنظیمات برای نمایش نیم‌دایره  
          startAngle={90}   // زاویه شروع  
          endAngle={-90}    // زاویه پایان  
              // ارتفاع نمودار  
        />  
      </div>  
      </div>  
       
    </div>  
  );  
};  
export default TaskStatusChart;