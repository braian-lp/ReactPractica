import React, { useState , useEffect} from 'react';

export default function ScrollHook(props){
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {

        /* console.log('Moviendo el Scroll'); */

        const detectarScroll = ()=> {
            setScrollY(window.pageYOffset);
        }

        window.addEventListener("scroll", detectarScroll)

        return()=>{
            window.removeEventListener("scroll", detectarScroll);
        }

    },[scrollY]); // solo se va a ejecutar cuando haya un cambio de estado (scrollY)

    //like a componentDidMount
    useEffect(() => {
        //console.log("FASE de montaje")
    }, []); // array vacio si solo se necesita ejecutar una vez (ejemplo peticiones APIS)


    //like a componentDidUpdate (cada vez que se vuelva a renderizar el componente, se ejecutara lo que hay en este effect) 
    useEffect(() => {
        //console.log("FASE de actualizacion")
    });// no definido array

    //fase de desmontaje like a componentWillUnmount, retorna una funcion
    useEffect(() => {
        return()=>{
            //console.log("FASE de desmontaje")
        }
    });


    return(
        <>
            <h2>Scroll Hook</h2>
            <p>SCROLL Y del navegador {scrollY}px</p>
        </>
    )
}