import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'


function TaskForm() {

    // useContext => permite utilizar el contexto
    // TaskContext => nombre del contexto que queramos
    // extraemos el valor que tenga
    //const valor = useContext(TaskContext)
    //console.log(valor);
    const { createTask } = useContext(TaskContext); // objeto con las variables que le pasemos en este caso(tasks, createTask, deleteTask,) y lo destructuramos  con lo que queramos { variable }

    const handleSubmit = (e) => {
        e.preventDefault();
        // obcion 1
        const newTask = {
            //id: tasks.length,
            title: title,
            description: description
        };
        console.log(newTask);
        createTask(newTask);

        // opcion 2: pasar como string los valores y en el component App donde tenemos acceso al array de tareas, ahi generar el newTask
        /** createTask(title, description) */

        // clear form
        setTitle('');
        setDescription('');
    }

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <>
        <div className='max-w-md mx-auto'>
            <form onSubmit={ handleSubmit } className="bg-slate-800 p-5 mb-4">
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu tarea</h1>
                <input type="text" placeholder='Escribe tu tarea'
                    onChange={(e) => setTitle(e.target.value) }
                    value={ title }
                    autoFocus 
                    className='bg-slate-300 p-3 w-full mb-2'/>
                <textarea type="text" placeholder='Escribe la descripción'
                    onChange={ (e) => setDescription(e.target.value) }
                    value={ description } 
                    className='bg-slate-300 p-3 w-full mb-2'/>
                <button className='bg-indigo-500 px-3 py-1 text-white'>
                    Guardar
                </button>
            </form>
        </div>
    </>
}

export default TaskForm