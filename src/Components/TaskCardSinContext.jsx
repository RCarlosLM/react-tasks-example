import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext'

function TaskCard({ task, deleteTask }) {

    // useContext => permite utilizar el contexto
    // TaskContext => nombre del contexto que queramos
    // extraemos el valor que tenga
    //const valor = useContext(TaskContext)
    //console.log(valor);

    /** () => { deleteTask(task.id) }
     * esto solo es otra forma de decir, que la funcion deleteTask tan solo se va a ejecutar al dar click
     */
    return <>
        <div>
            <h1>{task.title}</h1>
            <p>{task.description}</p>
            <button onClick={ () => { deleteTask(task.id) } } >
                Eliminar
            </button>
        </div>
    </>
}

export default TaskCard