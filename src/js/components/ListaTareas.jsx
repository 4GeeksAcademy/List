import React, { useEffect, useState } from "react";
import InputToDo from "./InputToDo";
import ItemTarea from "./ItemTarea";
import {getUserData} from "../../API/API"

export default function ListaTareas() {
	const [tareas, setTareas] = useState([]);

	useEffect(()=>{
		getUserData().then(dataRecib => setTareas(dataRecib))
	},[]);

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
			<h2 className="my-4">To Do List</h2>
			<div className="container">
				<div className="row">
					
					<div className="col-4"></div>

					
					<div className="col-4">
						<InputToDo incluir={agregarNuevaTarea} />
						{tareas.map((tarea, index) => (
							<div key={index} className="tarea-contenedor my-2">
								<ItemTarea
									tarea={tarea.label}
									eliminar={() => eliminar(tarea)}
								/>
							</div>
						))}
					</div>

					<div className="col-4"></div>
				</div>
			</div>

			<br />
			<button onClick={cambiarModo} className="botonClaro btn btn-secondary mb-3">
				Cambiar estilo
			</button>
		</div>
	);
}