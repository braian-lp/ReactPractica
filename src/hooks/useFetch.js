import { useState, useEffect } from 'react'

export const useFetch=(url)=>{
    const [data, setData]= useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const getData = async (url)=>{

            try {
                let res = await fetch(url);

                if(!res.ok){
                    console.log("error");
                    /* throw {
                        err:true,
                        status:res.status,
                        statusText: res.statusText || "Ocurrio un error"
                    }; */
                }

                let data = await res.json();
                setIsPending(false);
                setData(data);
                setError({err:false});

            } catch (err) {
                console.log("hubo un error");
                /* setIsPending(true);
                setError(err); */
            }  
        };

        getData(url);
        
    }, [url])

    return{data, isPending, error}
}
