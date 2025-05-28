import { useState } from 'react'

export default function InputToDo({ incluir }) {
    const [textoTarea, setTextoTarea] = useState('');
    const handleChange = (e) => {
        setTextoTarea(e.target.value);
    }
    const handleClick = () => {
        incluir(textoTarea);
        setTextoTarea('');
    }
    const handleEnter = (event) => {
        if (event.key === 'Enter'){
            handleClick();
        }
    }

    return (
        <div className="div">
            <input type="text" name="tarea" id="tarea" onChange={handleChange} onKeyDown={handleEnter} value={textoTarea} />
            <button onClick={handleClick} >Incluir</button>
        </div>
    )
}
