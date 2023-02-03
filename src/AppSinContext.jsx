import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import { tasks as data } from './data/tasks'
import { useState, useEffect } from 'react'

function App() {

  const [tasks, setTasks] = useState([]); // inicia vacio

  // cuando cargue ,[] el componente le asiganamos las tareas(que consultamos) a la variable que queramos
  useEffect(() => {
    setTasks(data);
  }, [])

  /** recibe una nueva tarea
   * añadimos la nueva tarea al arreglo de tasks
   * ...tasks => esta sintaxis copia todos los elementos del array y genera uno nuevo arreglo sin alterar aun al original
   * [...tasks, task] => 1er copia los elementos del array, 2do objeto o varibale a añadir al arreglo 
   */
  // opcion 1: 
  function createTask(task){
    // asignamos el nuevo arreglo
    //setTasks([...tasks, task]);
    setTasks([...tasks, {
      id: tasks.length + 1,
      title: task.title,
      description: task.description
    }]);
  }

  // opcion 2: recibimos string, y aqui generamos el nuevo objeto
  /*  let createTask = (taskTitle, taskDescription) => {
    // asignamos el nuevo arreglo
    setTasks([...tasks, {
      id: tasks.length,
      title: taskTitle,
      description: taskDescription
    }]);
  } */

  /** quitar(eliminar) elementos de un array
   * filter => permite volver a recorrer todos los arreglos uno por uno y aplicar una condicion
   * si la condicion es true se queda, si es falsa se quita del arreglo
   * ej:
   * const numbers = [10, 99, 20]
   * numbers.filter(n => n !== 99) // por cada reccorido llamamos n que representa cada elemento
   * resul: [10, 20]
   */

  function deleteTask(taskId){
    console.log(tasks);
    console.log(taskId);
    // eliminar del array tasks
    //tasks.filter(task => task.id !== taskId);
    //se lo establecemos(actualizamos) el estado(la variable tasks)
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return <>
    <TaskForm createTask={createTask} tasks={tasks} />
    <TaskList tasks={tasks} deleteTask={deleteTask} />
  </>
}

export default App