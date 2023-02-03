import { useState } from 'react'


function TaskForm({ createTask, tasks }) {

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
        <form onSubmit={ handleSubmit }>
            <input type="text" placeholder='Escribe tu tarea'
                onChange={(e) => setTitle(e.target.value) }
                value={ title }
                autoFocus />
            <textarea type="text" placeholder='Escribe la descripción'
                onChange={ (e) => setDescription(e.target.value) }
                value={ description } />
            <button>
                Guardar
            </button>
        </form>
    </>
}

export default TaskForm