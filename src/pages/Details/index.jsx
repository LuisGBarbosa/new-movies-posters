import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import './Details.css'
import { toast } from "react-toastify";

const Details = () => {
    const { id } = useParams();
    const [ film, setFilm ] = useState();
    const [ loading, setLoading ] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        async function loadFilm() {
            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '12c532f4dc3ee17399e56a68d7a7f3c1',
                    language: 'pt-BR'
                }
            })
            .then((response) => {
                setFilm(response.data);
                console.log(response.data)
                setLoading(false)
            })
            .catch(() => {
                navigate("/", { replace: true });
                // console.log('Filme não encontrado')
                return;
            })
        }

        loadFilm();

        return () => {
            console.log('Componente desmontado.')
        };

    }, [navigate, id])
    
    const SaveFilm = () => {
        const myList = localStorage.getItem("@newMovies");

        let savedFilms = JSON.parse(myList) || [];

        const hasFilm = savedFilms.some((savedFilms) => savedFilms.id === film.id );

        if(hasFilm) {
            toast.error("Este filme já existe na sua lista!")
            return;
        }

        savedFilms.push(film);
        localStorage.setItem("@newMovies", JSON.stringify(savedFilms));
        toast.success("Filme salvo com sucesso!");
    }

    if(loading) {
        return (
            <div>
                <h1>Carregando...</h1>
            </div>
        )
    }

    return(
        <div className="details">
            <div className="detailsDiv">
                <div className="divImage">
                    <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} />
                </div>
                <div className="info">
                    <h1>{film.title}</h1>
                    <span>Lançamento: {film.release_date}</span>
                    <h3>Sinopse</h3>
                    <span className="sinopse">{film.overview}</span>
                    <strong>Avalicação: {film.vote_average.toFixed(2)}</strong>

                    <div className="area-buttons">
                        <button onClick={SaveFilm}>Salvar</button>
                        <button>
                            <a target="blank" href={`https://www.youtube.com/results?search_query=${film.title}`}>Trailer</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details;