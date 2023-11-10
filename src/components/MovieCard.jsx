

function MovieCard ({ pelicula })// children key
{ //LA FUNCION de COMPONENTES NO PUEDE SER ASINCRONA 
    const { title, overview, poster_path, vote_averange, vote_count, release_date } = pelicula
    return (
        <article className='moviecard'>
            <div className="moviecard-image">
                <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={`Poster ${title}`} />
            </div>
            <h3>{title}</h3>

            <p>
                {overview}
            </p>
        </article>
    )
}


export default MovieCard