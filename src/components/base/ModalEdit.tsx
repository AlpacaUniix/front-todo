import { useForm } from 'react-hook-form'
// import { updateTasks } from '../../services/request'

export default function Modal(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  return (
    <>
      <div
        className="relative z-10 font-mono"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div
            className="flex min-h-full items-end justify-center
         p-4 text-center sm:items-center sm:p-0"
          >
            <div
              className="relative transform overflow-hidden rounded-lg
           bg-white text-center shadow-xl transition-all sm:my-8 
           sm:w-full sm:max-w-lg"
            >
              <div className="bg-orange px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <span className="block mx-2 text-2xl text-center font-medium text-purple-300">
                  Edit task
                </span>
                <div className="">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <form onSubmit={handleSubmit(props.onUpdate)}>
                      {/* edit task name */}
                      <span className="block mx-2 mt-3 text-sm font-medium text-purple-300">
                        Task name
                      </span>
                      <input
                        type="text"
                        placeholder="Edit tasks..."
                        className=" mt-1 px-3 py-2 bg-white border shadow-sm text-blue-200
                                    border-blue-100 placeholder-blue-100 focus:outline-none
                                    focus:border-blue-200 focus:ring-blue-200 block w-full rounded-md sm:text-sm focus:ring-1"
                        {...register('task', { required: true, maxLength: 80 })}
                      />
                      {errors.exampleRequired && <p>This field is required</p>}

                      {/* edit date  */}
                      <span className="block mx-2 mt-3 text-sm font-medium text-purple-300">
                        date
                      </span>
                      <input
                        type="date"
                        placeholder="Edit tasks..."
                        className=" mt-1 px-3 py-2 bg-white border shadow-sm text-blue-200
                                    border-blue-100 placeholder-blue-100 focus:outline-none
                                    focus:border-blue-200 focus:ring-blue-200 block w-full rounded-md sm:text-sm focus:ring-1"
                        {...register('date', { required: true, maxLength: 80 })}
                      />
                      {errors.exampleRequired && <p>This field is required</p>}
                      <div className="mt-3 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md border border-transparent
                 bg-teal-300 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-teal-400
                  focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 sm:ml-3 
                  sm:w-auto sm:text-sm"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="mt-3 inline-flex w-full justify-center rounded-md border
                 border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm
                  hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-red-200 
                  focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          onClick={props.onHide}
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
