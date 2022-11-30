import React, { useEffect, useState } from 'react'
import Tarea from './Tarea';
import TodoForm from './TodoForm'

const TodoList = () => {

    const [tareas, setTareas] = useState([]);

    useEffect(()=> {
        if(localStorage.getItem("tareas")){
            setTareas(JSON.parse(window.localStorage.getItem("tareas")));
        }
    },[]);

    useEffect(()=> {
        window.localStorage.setItem("tareas", JSON.stringify(tareas))
    },[tareas])

    const agregarTarea = (tarea) => {
        setTareas([
            ...tareas,
            tarea
        ])
    }

    const eliminarTarea = (id) => {
        setTareas(tareas.filter(tarea => {
            return tarea.id !== id
        }))
    }

    const completarTarea = (id) => {
        const cambiarEstado = tareas.map(item => (item.id === id ? {...item, estado: !item.estado} : item
        ))

        setTareas(cambiarEstado);
    };

    return (
        <div>
            <TodoForm agregarTarea={agregarTarea} />
            <h2 className='mb-2'>Mis tareas</h2>
            <ul
                className='list-group list-group-numbered'
            >
                {
                    tareas.map(tarea => (
                        <Tarea key={tarea.id} {...tarea} eliminarTarea={eliminarTarea} completarTarea={completarTarea} />
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList