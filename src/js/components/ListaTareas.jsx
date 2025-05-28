import React from "react";
import { useState } from "react";
import InputToDo from "./InputToDo";
import ItemTarea from "./ItemTarea";


export default function ListaTareas() {
	const [tareas, setTareas] = useState(["caminar", "correr", "saltar"]);

	const agregarNuevaTarea = (nuevaTarea) => {
		const copiaTarea = [...tareas, nuevaTarea];
		setTareas(copiaTarea);
	};

	const eliminar = (tareaEliminar) => {
		const chaoTarea = tareas.filter(tarea => tarea !== tareaEliminar);
		console.log(chaoTarea);
		setTareas(chaoTarea);
	};

	return (
		
			<div className="listaTareas text-center position-relative z-1">
				<h2>To Do List</h2>
				<InputToDo incluir={agregarNuevaTarea} />
				{tareas.map(tarea => (
					<ItemTarea 
						key={tarea}
						tarea={tarea}
						eliminar={() => eliminar(tarea)}
					/>
				))}
			</div>
		
	);
}
