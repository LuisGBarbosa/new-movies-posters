import './About.css'

export const About = () => {
    return (
        <div>
            <div className="container">
                <h1>Sobre o Projeto</h1>

                <article>
                    <span>
                        Este projeto foi desenvolvido com finalidade de praticar, exercitar conhecimentos com consumo de APIs
                        no Front-End com ReactJS.
                    </span>
                    <span>
                        A API pública consumida neste projeto, é a API de Filmes da TDB Movie.
                    </span>
                        <a target="blank" href="https://www.themoviedb.org/">Visitar site - TDB Movie</a>
                </article>

                <p>Desenvolvido por: Luís Gustavo</p>
                <a target="blank" href="https://github.com/LuisGBarbosa">Perfil do GitHub</a>
            </div>
        </div>
    )
}

export default About;