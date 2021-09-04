import React,{Component} from "react";

export class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador : 0
        };
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(){
        console.log("sumando");
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar(){
        this.setState({
            contador: this.state.contador -1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <p>{this.props.msg}</p>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

export class EventosES7 extends Component{

    state={
        contador : 0
    }

    sumar=(e)=>{
        console.log("sumando");
        console.log(this)
        this.setState({
            contador: this.state.contador + 1
        })
    }

    restar=(e)=>{
        this.setState({
            contador: this.state.contador -1
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

/* function Boton(props){
    return <button onClick={props.MyOnClick}>Boton hecho componente</button>
} */

const Boton = ({MyOnClick}) => <button onClick={MyOnClick}>Boton hecho componente</button>

export class MasSobreEventos extends Component{
    handleClick = (e, mensaje)=>{
        console.log(e); //SyntheticEvent (es como una capa que da reac a los eventos nativos de js)
        console.log(e.target);
        console.log(e.nativeEvent) //Evento nativo de js
        console.log(mensaje);
    }

    render(){
        return(
            <div>
                <h2>Mas sobre Eventos</h2>
                <button onClick={(e)=> this.handleClick(e,"hola parando parametro desde un evento")}>Saludar</button>
                {/* EVENTO PERSONALIZADO */}
                {/* <Boton onClick={(e)=>this.handleClick(e,"pasando parametro desdede evento personalizado")}></Boton>*/}            
                <Boton MyOnClick={(e)=>this.handleClick(e,"pasando parametro desdede evento personalizado")}></Boton>

            </div>

        )
    }
}



