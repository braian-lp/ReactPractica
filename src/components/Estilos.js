import React from 'react';
import './Estilos.css';
import moduleStyle from "./Estilos.module.css";

export default function Estilo(){
    
    let myStyle={
        borderRadius:".5rem",
        margin:"2rem auto",
        maxWidth:"50%"
    };

    return(       
            <section className="estilo">
                <h2>Estilos css en react</h2>
                <h3 className="bg-react">Estilos css en react hoja externa</h3>
                <h3 
                className="bg-react" 
                style={{borderRadius:".25rem", margin:"1rem"}}
                >Estilos en linea(atributo style)</h3>
                <h3 
                className="bg-react" 
                style={myStyle}
                >Estilos en linea(atributo style)</h3>
                <h3 className="bg-react">
                    Agregando Normalize con
                    <br/>
                    <code>@import-normalize</code>
                </h3>
                <h3 className={moduleStyle.error}>Estilos con Modulos</h3>
                <h3 className={moduleStyle.succes}>Estilos con Modulos</h3>
            </section>
            
    )
}