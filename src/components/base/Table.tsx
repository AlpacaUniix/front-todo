import { useState, useEffect } from 'react'
import { getTasks } from '../../services/request'
import { deleteTasks, updateTasks } from '../../services/request'
import Modal from './ModalEdit'

export default function TableTodo() {
  const [data, setData] = useState([])
  const [change, setChange] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [id, setId] = useState()
  const [isCheck, setIsCheck] = useState(false);

  console.log(data)
  useEffect(() => {
    const addTable = async () => {
      const tasks = await getTasks()
      setData(tasks)
      setChange(false)
    }
    addTable()
  }, [change])

  console.log(id)

  const deleteTable = (id) => {
    try {
      deleteTasks(id)
      setChange(true)
    } catch (err) {
      console.error(err)
    }
  }
  const show = (id) => {
    setShowModal(true)
    setId(id)
  }

  const updateTable = async (data) => {
    console.log(id,data)
    try {
      if (data !== undefined && id!==undefined) {
        await updateTasks(id, data)
      }
    } catch (err) {
      console.error(err)
    }
  }



  return (
    <>
      <table className="w-full table-fixed border-collapse border mt-3 font-mono bg-orange text-pink-600">
        {/* Header Table*/}
        <thead>
          <tr>
            <th className="border-2 p-2 border-purple-900 ">Checklist</th>
            <th className="border-2 p-2 border-purple-900">Task</th>
            <th className="border-2 p-2 border-purple-900">Due date</th>
            <th className="border-2 p-2 border-purple-900">Edit</th>
            <th className="border-2 p-2 border-purple-900">Delete</th>
          </tr>
        </thead>
        {/* Body Table */}
        <tbody className="w-full text-center">
          {data.map((item: any) => (
            <tr>
              {/* Column Checklist */}
              <td className="border-2 p-2 border-purple-900">
                <div className="flex justify-center">
                  <input
                    id="checked-checkbox"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 accent-pink-600"
                  />
                </div>
              </td>
              {/* Column task name */}
              <td className="border-2 p-2 border-purple-900">
                <div>{item.task}</div>
              </td>
              {/* Column Due date */}
              <td className="border-2 p-2 border-purple-900">
                <div>{item.date}</div>)
              </td>
              {/* Column Edit task */}
              <td className="border-2 p-2 border-purple-900">
                <div className="flex justify-center">
                  <button
                    className="p-3  w-16 rounded-md bg-yellow-100 text-white hover:bg-yellow-200"
                    onClick={() => show(item.id)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </button>
                </div>
              </td>
              {/* Column Delete task */}
              <td className="border-2 p-2 border-purple-900">
                <div className="flex justify-center">
                  <button
                    className="p-3  w-16 rounded-md bg-red-100 text-white hover:bg-red-200"
                    onClick={() => deleteTable(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal === true ? (
        <Modal onHide={() => setShowModal(false)} onUpdate={updateTable} />
      ) : null}
    </>
  )
}
