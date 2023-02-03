
import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

// createContext =>Z retorna un objeto, contiene un valor que todos los componentes pueden utilizar
// esto es lo que almacena los datos
export const TaskContext = createContext()

// TaskContextProvider => es el componente que engloba al resto de componentes
export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]); // inicia vacio

    /** recibe una nueva tarea
   * añadimos la nueva tarea al arreglo de tasks
   * ...tasks => esta sintaxis copia todos los elementos del array y genera uno nuevo arreglo sin alterar aun al original
   * [...tasks, task] => 1er copia los elementos del array, 2do objeto o varibale a añadir al arreglo 
   */
    // opcion 1: 
    function createTask(task) {
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

    function deleteTask(taskId) {
        console.log(tasks);
        console.log(taskId);
        // eliminar del array tasks
        //tasks.filter(task => task.id !== taskId);
        //se lo establecemos(actualizamos) el estado(la variable tasks)
        setTasks(tasks.filter(task => task.id !== taskId));
    }

    // cuando cargue ,[] el componente le asiganamos las tareas(que consultamos) a la variable que queramos
    useEffect(() => {
        setTasks(data);
    }, [])

    // retornara un elemento que nos permitira englobar al resto
    // desde caulqueir componente podemos acceder a las variables con context, por eso se utiliza
    // retornara componentes hijos: (props.children) => quiere decir que iran mas componentes
    // uso: <TaskContextProvider> aqui a dentro todo lo de un componente</TaskContextProvider>
    return <>
        {/** desde TaskContext creamos un provider 
         * al value={estas llaves interpretan codigo(siempre van)} le pasamos un objeto por que le pasaremos varios valores, por eso va en {}
        */}
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    </>
}