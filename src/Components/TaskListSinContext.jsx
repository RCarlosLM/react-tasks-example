import TaskCard from './TaskCard'

function TaskList({ tasks, deleteTask }) { // or (props) y se accedeira asi: props.tasks

    if ( tasks.length === 0 ){
        return <h1>Aun no hay tareas</h1>;
    }

    return (
        <div>
            { tasks.map((task, index) => (
                <TaskCard key={ task.id } task={ task } deleteTask={ deleteTask } />
            )) }
        </div>
    )
}

export default TaskList