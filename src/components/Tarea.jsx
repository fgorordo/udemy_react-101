import React from 'react'

const Tarea = ({ nombre, descripcion, isPrio, estado, id, eliminarTarea, completarTarea }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
            <div className="fw-bold">{nombre} {estado ? "( Finalizado )": "( Pendiente )"}</div>
            <p>{descripcion}</p>
            <div>
                <button className='btn btn-danger me-2' onClick={() => eliminarTarea(id)}>Eliminar</button>
                {
                  estado ? null : <button className='btn btn-success me-2' onClick={() => completarTarea(id)}>Completar</button>
                }
            </div>
        </div>
        <span className="badge bg-primary rounded-pill">{isPrio && "Prioritario"}</span>
    </li>
  )
}

export default Tarea