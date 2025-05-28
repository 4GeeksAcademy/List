import React from "react"
export default function ItemTarea({tarea, eliminar}){
       const eliminarClick = () => {
        eliminar();
    }
    return (
    <div className="itemTarea">
        <span>{tarea}</span>
        <span className="eliminar" onClick={eliminarClick}>X</span>
    </div>)
}
