"use client";
import { useState, useEffect } from "react";
import { GoTrash } from "react-icons/go";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { TfiBackRight } from "react-icons/tfi";
import useTodoStore from "@/app/store";
import { stat } from "fs";
import { todo } from "node:test";

function ToDoList() {
  // Correcting the use of state
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((stat) => stat.deleteTodo);
  const setDeletedTodos = useTodoStore((stat) => stat.setDeletedTodos);
  const restoreTodo = useTodoStore((stat) => stat.restoreTodo);
  const deletedTodos = useTodoStore((stat) => stat.deletedTodos);
  const showMassage = useTodoStore((stat) => stat.showMassage);

  return (
    <>
      {/* In progress */}
      <div className="w-[100%] mt-6 border border-[#e4e4e7] rounded-md">
        <div className="w-[100%] my-2 flex flex-wrap justify-center">
          <h2 className="w-[97%] min-h-[10px] flex justify-end text-[12px] font-semibold text-[#212121]">
            در حال انجام
          </h2>
          <ul className="w-[100%] flex flex-wrap justify-center">
            {todos
              .filter((todo) => !todo.completed)
              .map((todo, index) => (
                <li
                  key={index}
                  className="w-[97%] flex justify-between items-center min-h-[30px] border-b-[1px] border-[#e4e4e7]"
                >
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="w-[4%] min-h-[20px] text-[14px] text-[#22272f] flex justify-center items-center border border-[#e4e4e7] rounded-[4px]"
                  >
                    <GoTrash />
                  </button>
                  <div
                    className="w-[85%] flex justify-end items-center text-[14px]"
                    onClick={() => toggleTodo(todo.id)}
                  >
                    <div className="w-[85%] text-[10px] flex justify-end text-[#626c7b] font-semibold">
                      {todo.text}
                    </div>
                    <div className="w-[6%] text-[14px] flex justify-center text-[#818a98]">
                      <RiCheckboxBlankCircleLine />
                    </div>
                  </div>
                </li>
              ))}
          </ul>

          <div
            className={`w-[97%] min-h-[30px] bg-[#f3f4f6]  justify-between items-center px-4  ${
              showMassage.length > 0 ? "flex" : "hidden"
            }`}
          >
            <button
              onClick={() => {  
                const todoToRestore = showMassage[0]; // به عنوان مثال برای بازگرداندن اولین تسک  
                if (todoToRestore) {  
                  console.log(todoToRestore.id)
                  restoreTodo(todoToRestore.id);  
                }  
              }}  
              className="w-[3%] h-[50%] flex justify-center items-center text-[11px] font-semibold bg-[#94a3b8] rounded-[4px]"
            >
              <TfiBackRight />
            </button>
            <span className="w-[85%] text-[9px] text-[#626c7b] font-semibold flex justify-end">
              ثانیه برای بازگرداندن فرصت دارید{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Done */}
      <div className="w-[100%] min-h-[50px] flex flex-wrap items-center mt-6 border border-[#e4e4e7] rounded-md">
        <h2 className="w-[97%] min-h-[10px] flex justify-end text-[12px] font-semibold text-[#212121]">
          انجام شده
        </h2>

        <ul className="w-[100%] flex flex-wrap justify-center">
          {todos.filter((todo) => todo.completed).length > 0 ? (
            todos
              .filter((todo) => todo.completed)
              .map((todo, index) => (
                <li
                  key={index}
                  className="w-[97%] flex justify-between items-center min-h-[30px] "
                >
                  <div
                    className="w-[100%] flex justify-end items-center text-[14px]"
                    onClick={() => toggleTodo(todo.id)}
                  >
                    <div className="w-[85%] text-[10px] flex justify-end text-[#626c7b] font-semibold">
                      {todo.text}{" "}
                    </div>
                    <div className="w-[6%] text-[14px] flex justify-center text-[#818a98]">
                      <RiCheckboxBlankCircleLine />
                    </div>
                  </div>
                </li>
              ))
          ) : (
            <div className="w-[97%] min-h-[10px] my-3 text-[9px] text-[#c9cdd3] font-semibold flex justify-end">
              در این بخش هیچ ایتمی وجود ندارد
            </div>
          )}
        </ul>
      </div>
    </>
  );
}

export default ToDoList;
