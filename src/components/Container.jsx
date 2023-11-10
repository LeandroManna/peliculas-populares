import MovieCard from "./MovieCard.jsx"
// useEffect  y useState
// hooks = utilidades creadas de React o pueden ser creadas por nosotros
// Virtual DOM !== Real DOM
// Virtual DOM es una copia completa en memoria del DOM real
// Más Eficiente y rapido modificar el Virtual DOM que el Real DOM pero por contraparte consume mucha memoria
import { useState, useEffect } from 'react'



function Container () {

    const [movies, setMovies] = useState([]) // useState retorna un arreglo
    const [loader, setLoader] = useState(false)
    const [page, setPage] = useState(1)



    const getMovies = async () => {
        try {

            // https://api.themoviedb.org/3/movie/popular
            const url = `${import.meta.env.VITE_URL}?language=es-ES&page=${page}` // template string 

            const config = {
                method: "GET", // GET POR DEFECTO  METHODS = GET,POST,PUT,DELETE,PATCH,OPTIONS
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${import.meta.env.VITE_TOKEN}`
                },
                //body:"" // para metodos PUT PATCH POST
            }
            const req = await fetch(url, config)
            if (req.status === 200) {
                const res = await req.json()
                if (movies.length === 0) {
                    setMovies(res.results)
                } else {
                    setMovies([movies, ...res.results])
                }

            }


        } catch (err) {
            console.log(err.message)
        }
    }

    const handleClick = (event) => {
        event.preventDefault()
        setPage(page + 1)
    }

    useEffect(() => {
        getMovies()
    }, [page]) // array de dependencias. si esta vacio se ejecuta una vez se monta el componente
    // si tiene dependencias, se va a ejecutar el USEEFFECT cada vez que cambie la/s dependencia/s



    return (
        <>
            <main className="container content" id='mimain'>
                {/* {1 === '1' ? (loader ? <p>Cargando</p> : <p>No cargando</p>) : "no es igual a 1"} */}
                {
                    movies?.map((pelicula) => {
                        return <MovieCard key={pelicula.id} pelicula={pelicula} />
                    })
                }

            </main>
            <button className='btn-seemore' onClick={handleClick}>Ver más</button>

            {loader && <p>Cargando...</p>}
        </>
    )
}



export default Container