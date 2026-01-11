import './index.scss';

import { Link } from 'react-router-dom';

export default function AboutPage(){
    return (
        <section className="container-aboutPage">
            <article className="about-intro">
                <h1 className='title-aboutIntro'>Negócios e Produtos</h1>
                <div className="layout-introAbout">
                    <div className="card-intro">
                        <img src="/about/açucar.jpg" alt="Açucar" />
                        <h1>Açucar</h1>
                    </div>
                    <div className="card-intro">
                        <h1>Etanol</h1>
                        <img src="/about/etanol.jpg" alt="Etanol" />
                    </div>
                    <div className="card-intro">
                        <h1>Bioeletricidade</h1>
                        <img src="/about/bioeletricidade.webp" alt="Bioletricidade" />
                    </div>
                    <div className="card-intro">
                        <h1>Levedura - Nutrição Animal</h1>
                        <img src="/about/levedura.webp" alt="Levedura" />
                    </div>
                </div>
            </article>
            <article className="container-history">
                <div className="layout-history">
                    <div className="history-years">
                        <h1>79 anos</h1>
                        <p>NO SETOR SUCROENERGÉTICO</p>
                    </div>
                    <div className="production-units">
                        <h1>4</h1>
                        <p>UNIDADES PRODUTIVAS</p>
                    </div>
                    <div className="collaborators">
                        <h1>4,4 Mil</h1>
                        <p>COLABORADORES</p>
                        <Link to="/work-us">Trabalhe Conosco</Link>
                    </div>
                </div>
                
            </article>
        </section>
    )
}