import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './Favorites.css'

const Favorites = () => {
    const [ films, setFilms ] = useState([]);

    useEffect(() => {
        const listFilms = localStorage.getItem("@newMovies")
        setFilms(JSON.parse(listFilms) || [] );
        
    }, []);
    
    console.log(films)

    const deleteFilm = (id) => {
        const filteredFilms = films.filter((film) => {
            return (film.id != id)
        })

        setFilms(filteredFilms);
        localStorage.setItem("@newMovies", JSON.stringify(filteredFilms));
        toast.success("Filme removido com sucesso!");
    }

    return (
        <div className="myMovies">
            <div className='divh1'>
                <h1>Meus filmes</h1>
            </div>
            {films.length === 0 && <span>Você ainda não possui nenhum filme salvo :(</span>}

            <div className="favoritesFilms">
                {films.map((film) => {
                    return (
                        <article key={film.id}>
                            <strong>{film.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title}/>
                            <Link to={`/details/${film.id}`}>Detalhes</Link>
                            <button onClick={() => deleteFilm(film.id)}>Excluir</button>
                        </article>
                    )
                })}
            </div>
        </div>
    )
} 

export default Favorites;