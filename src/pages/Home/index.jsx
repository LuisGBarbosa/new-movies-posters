import React from "react"
import api from '../../services/api'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './Home.css';

function Home () {
    const [ films, setFilms ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ search, setSearch] = useState('');

    useEffect(() => {
        async function loadFilms() {
            const response = await api.get('movie/now_playing', {
                params: {
                    api_key: '12c532f4dc3ee17399e56a68d7a7f3c1',
                    language: 'pt-BR',
                    page: 1
                }
            });
            setFilms(response.data.results.slice(0, 12));
            setLoading(false);
        };

        loadFilms();
    }, []);

        //Busca filmes
        const toLowerSearch = search.toLowerCase();
        const filteredFilm = films.filter(filme => filme.title.toLowerCase().includes(toLowerSearch));

        function pesquisa() {
            const h1 = document.getElementById('h1DaHome');
            h1.innerText = `Resultados da pesquisa`;
        };

    if(loading) {
        return(
            <div className="loading">
                <h3>Carregando filmes, aguarde...</h3>
            </div>
        )
    };

    return (
        <div className="HomeBody">
            <section className="banner">
                <div className="header">
                    <h1>Confira filmes lançamentos em cartaz no cinema!</h1>
                    <div className="buttons">
                        <input 
                        type="text" 
                        placeholder="Digite o nome do filme"
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        />
                        {/* <Link to="/favorites">Meus filmes</Link>        */}
                        <button className="btnSearch" onClick={pesquisa}><a href="#filmes">Pesquisar</a></button>
                    </div>
                </div>
            
                <div className="divImageIllustration">
                    <img src="../../src/assets/ilustracao-cinema.png" alt="imagemBanner" />
                </div>
            </section>
            <h1 id="h1DaHome" className="h1DaHome">Filmes em cartaz</h1>
            <section id="filmes" className="listFilms">
                {filteredFilm.map((film) => {
                    return (
                        <article key={film.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${film.poster_path}`} alt={film.title} Link="to"/>
                            <strong>
                            <Link to={`/details/${film.id}`}>{film.title}</Link> 
                            </strong>
                        </article>
                    )
                })}
            </section>
        </div>
    )
}

export default Home;