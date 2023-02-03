import TaskCard from './TaskCard'
import { TaskContext } from '../context/TaskContext';
import { useContext } from 'react';

function TaskList() { // or (props) y se accedeira asi: props.tasks

    const { tasks } = useContext(TaskContext);

    if ( tasks.length === 0 ){
        return <h1 className='text-2xl text-bold text-slate-300 text-center'>Aun no hay tareas</h1>;
    }

    return (
        <div className='grid grid-cols-4 gap-2'>
            { tasks.map((task, index) => (
                <TaskCard key={ task.id } task={ task } />
            )) }
        </div>
    )
}

export default TaskList