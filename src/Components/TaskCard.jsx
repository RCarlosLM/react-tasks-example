import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext'

function TaskCard({ task }) {

    // useContext => permite utilizar el contexto
    // TaskContext => nombre del contexto que queramos
    // extraemos el valor que tenga
    //const valor = useContext(TaskContext)
    //console.log(valor);

    const { deleteTask } = useContext(TaskContext);

    /** () => { deleteTask(task.id) }
     * esto solo es otra forma de decir, que la funcion deleteTask tan solo se va a ejecutar al dar click
     */
    return <>
        <div className='bg-gray-800 text-white p-4 rounded-md'>
            <h1 className='text-lg font-bold capitalize'>{task.title}</h1>
            <p className='text-gray-500 text-sm'>{task.description}</p>
            <button className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400' onClick={ () => { deleteTask(task.id) } } >
                Eliminar
            </button>
        </div>
    </>
}

export default TaskCard