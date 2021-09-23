import React, { useState } from 'react';

/* 
        for (en un label) ==> htmlFor
        value (por defecto ) ==> defaultValue
        checked (por defecto ) ==> defualtChecked
        selected (en los options) ==> defaultValue
    */

/* export default function Formularios(){
    const [nombre, setNombre] = useState("");
    const [sabor, setSabor]= useState("vanilla");
    const [lenguaje, setLenguaje] = useState("");
    const [terminos, setTerminos] = useState(false);

    const handleSubmit= (e) =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                >   
                </input>
                <p>Elige tu sabor de JS Favorito</p>
                <input 
                    type="radio" 
                    id="vanilla" 
                    name="sabor" 
                    value="vanilla" 
                    onChange={(e)=>setSabor(e.target.value)}
                    defaultChecked
                >
                </input>
                <label htmlFor="vanilla">Vanilla</label>
                <input 
                    type="radio" 
                    id="react" 
                    name="sabor" 
                    value="react" 
                    onChange={(e)=>setSabor(e.target.value)}
                >
                </input>
                <label htmlFor="react">React</label>
                <input 
                    type="radio" 
                    id="angular" 
                    name="sabor" 
                    value="angular" 
                    onChange={(e)=>setSabor(e.target.value)}
                >
                </input>
                <label htmlFor="angular">Angular</label>
                <input 
                    type="radio" 
                    id="view" 
                    name="sabor" 
                    value="view" 
                    onChange={(e)=>setSabor(e.target.value)}
                >
                </input>
                <label htmlFor="view">View</label>
                <p>Elige tu lenguaje de programacion favorito</p>
                <select 
                name="lenguaje"
                onChange={(e)=>setLenguaje(e.target.value)}
                defaultValue="" //el value de el option que se quiere tener como default
                >
                    <option value="">----</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br/>
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input
                        type="checkbox"
                        id="terminos"
                        name="terminos"
                        onChange={(e)=>setTerminos(e.target.checked)}
                >
                </input>
                <br/>
                <input type="submit"></input>
            </form>
        </>
    )
} */

export default function Formularios(){
    const [form,setForm] = useState({});

    const handleChange= (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const handleChecked= (e) =>{
        setForm({
            ...form,
            [e.target.name]: e.target.checked,
        });
    }

    const handleSubmit= (e) =>{
        e.preventDefault();
        alert("El formulario se ha enviado");
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre</label>
                <input 
                    type="text" 
                    id="nombre" 
                    name="nombre" 
                    value={form.name}
                    onChange={handleChange}
                >   
                </input>
                <p>Elige tu sabor de JS Favorito</p>
                <input 
                    type="radio" 
                    id="vanilla" 
                    name="sabor" 
                    value="vanilla" 
                    onChange={handleChange}
                    defaultChecked
                >
                </input>
                <label htmlFor="vanilla">Vanilla</label>
                <input 
                    type="radio" 
                    id="react" 
                    name="sabor" 
                    value="react" 
                    onChange={handleChange}
                >
                </input>
                <label htmlFor="react">React</label>
                <input 
                    type="radio" 
                    id="angular" 
                    name="sabor" 
                    value="angular" 
                    onChange={handleChange}
                >
                </input>
                <label htmlFor="angular">Angular</label>
                <input 
                    type="radio" 
                    id="view" 
                    name="sabor" 
                    value="view" 
                    onChange={handleChange}
                >
                </input>
                <label htmlFor="view">View</label>
                <p>Elige tu lenguaje de programacion favorito</p>
                <select 
                name="lenguaje"
                onChange={handleChange}
                defaultValue="" //el value de el option que se quiere tener como default
                >
                    <option value="">----</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br/>
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input
                        type="checkbox"
                        id="terminos"
                        name="terminos"
                        onChange={handleChecked}
                >
                </input>
                <br/>
                <input type="submit"></input>
            </form>
        </>
    )
}