import React, { useState } from "react";
import InputToDo from "./InputToDo";
import ItemTarea from "./ItemTarea";

export default function ListaTareas() {
	const [tareas, setTareas] = useState(["caminar", "correr", "saltar"]);

	const agregarNuevaTarea = (nuevaTarea) => {
		setTareas([...tareas, nuevaTarea]);
	};

	const eliminar = (tareaEliminar) => {
		const chaoTarea = tareas.filter(tarea => tarea !== tareaEliminar);
		setTareas(chaoTarea);
	};

	const [modo, setModo] = useState("vistaOscura");

	const cambiarModo = () => {
		setModo(modo === "vistaOscura" ? "vistaClara" : "vistaOscura");
	};

	return (
		<div className={`listaTareas text-center ${modo}`}>
			<h2>To Do List</h2>
			<InputToDo incluir={agregarNuevaTarea} />
			{tareas.map(tarea => (
				<ItemTarea
					key={tarea}
					tarea={tarea}
					eliminar={() => eliminar(tarea)}
				/>
			))}

			<br />
			<button onClick={cambiarModo} className="botonClaro btn btn-secondary mb-3">
				Cambiar estilo
			</button>
		</div>
	);
}
