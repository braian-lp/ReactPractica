import React, { useState, useEffect } from 'react';

function Reloj(props){
    return (
        <h3>{props.hora}</h3>
    )
}

export default function RelojHook(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString());
    const [visible, setVisible] = useState(false);
        
    useEffect(() => {
        let temporizador;

        if(visible){
            temporizador = setInterval(()=>{
                setHora(new Date().toLocaleTimeString())
            },1000)
        }else{
            clearInterval(temporizador);
        }

        return()=>{
            
            console.log("Fase de desmontaje");
            clearInterval(temporizador);
            
        }
    }, [visible]);


    return(
        <>
            <h2>Reloj con hook</h2>
            {visible && <Reloj hora={hora}></Reloj>}
            <button onClick={()=>{setVisible(true)}}>Iniciar</button>
            <button onClick={()=>{setVisible(false)}}>Detener</button>
        </>
    )

}