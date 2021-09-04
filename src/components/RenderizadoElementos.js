import React, {Component} from "react";
import data from "../helpers/data.json";

function ElementoLista(props){
    return(
        <li>
            <a href={props.el.web} target="_blank" rel="noreferrer">{props.el.name}</a>
        </li>
    )
}

export default class RenderizadoElementos extends Component{

    constructor(props){
        super(props);
        this.state = {
            seasons: ["Primavera", "verano","Otono","Invierno"]
        }
    }
    render(){
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del year</h3>
                <ol>
                    {
                        this.state.seasons.map((el) =>
                            <li key={el}>{el}</li>
                        )
                    }
                </ol>
                <h3>Frameworks frontends JS</h3>
                <ul>
                    {
                        data.frameworks.map((el) => <ElementoLista key={el.id} el={el}></ElementoLista>)
                    }
                </ul>
            </div>
        )
    }
}