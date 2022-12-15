import React from "react";

export default function TableTodo() {

    // const addTable = async 
  

    return(

        <table className="w-full border-collapse border mt-3 border-slate-500 bg-pink-100 ">
  <thead>
    <tr>
      <th className="border-2 p-2 border-pink-800 ">Checklist</th>
      <th className="border-2 p-2 border-pink-800">Task</th>
      <th className="border-2 p-2 border-pink-800">Due date</th>
      <th className="border-2 p-2 border-pink-800">Edit</th>
      <th className="border-2 p-2 border-pink-800">Delete</th>



    </tr>
  </thead>
  <tbody className="w-full">
    <tr>
      <td className="border-2 p-2 border-pink-800 ...">
        <div className="flex justify-center">
        <input type="checkbox" className="required:border-red-500" />
        </div>
      </td>
      <td className="border-2 p-2 border-pink-800 ..."></td>
      <td className="border-2 p-2 border-pink-800 ..."></td>
      <td className="border-2 p-2 border-pink-800 ...">
        <div className="flex justify-center">
        <button
        className="">
        <i className="bi bi-pencil-square"></i>
        </button>
        </div>
        
      </td>
      <td className="border-2 p-2 border-pink-800 ...">
        <div className="flex justify-center">
        <button
        className="">
        <i className="bi bi-trash"></i>
        </button>
        </div>
        
      </td>

      


    </tr>
  </tbody>
</table>

    )}