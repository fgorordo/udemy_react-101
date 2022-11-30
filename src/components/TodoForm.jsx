import { useState } from 'react'
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import { useFormulario } from '../hooks/useFormulario';

const TodoForm = ({agregarTarea}) => {

    const initialState = {
        nombre: "",
        descripcion: "",
        estado: "pendiente",
        isPrio: false
    };

    const [inputs, handleChange, reset] = useFormulario(initialState);

    const { nombre, descripcion, estado, isPrio } = inputs;


    const handleSubmit = (event) => {
        event.preventDefault();
        if(!nombre.trim()) {
            event.target[0].focus()
            Swal.fire({
                title: "¡Error!",
                text: "Debes completar los campos en blanco",
                icon: "error",
                confirmButtonText:"¡De acuedo!"
            })
            return
        }

        if(!descripcion.trim()) {
            event.target[1].focus()
            Swal.fire({
                title: "¡Error!",
                text: "Debes completar los campos en blanco.",
                icon: "error",
                confirmButtonText:"¡De acuedo!",
            })
            return
        }

        Swal.fire({
            title: "Éxito",
            text: "Tarea agregada correctamente.",
            icon: "success",
            timer:"2000",
            showConfirmButton: false
        })

        agregarTarea({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === "pendiente" ? false : true,
            isPrio: isPrio,
            id: uuidv4()
        })

        return reset();
    };

    return (
        <div>
            <h2>Agregar Tarea</h2>
            <form
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    className='form-control mb-2'
                    name="nombre"
                    placeholder='Ingrese nombre de la tarea.'
                    value={nombre}
                    onChange={handleChange}
                />
                <textarea
                    name="descripcion"
                    className='form-control mb-2'
                    placeholder="Describe brevemente la tarea."
                    value={descripcion}
                    onChange={handleChange}
                />
                <select
                    name="estado"
                    className='form-control mb-2'
                    value={estado}
                    onChange={handleChange}
                >
                    <option
                        value="pendiente"
                    >
                        Pendiente
                    </option>
                    <option
                        value="completada"
                    >
                        Completada
                    </option>
                </select>
                <div className="form-check mb-2">
                    <input
                        className="form-check-input"
                        type="checkbox" value=""
                        id="flexCheckDefault"
                        name="isPrio"
                        checked={isPrio}
                        onChange={handleChange}
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Dar prioridad
                    </label>
                </div>
                <button type="submit" className='btn btn-primary mb-2'>Agregar</button>
            </form>
        </div>
    )
}

export default TodoForm