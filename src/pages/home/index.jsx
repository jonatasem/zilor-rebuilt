
import './index.scss';

import imgHomePage from '/home/home-page.jpg';

export default function HomePage(){
    return (
        <section className="container-homePage">
            <img src={imgHomePage} alt="imagem home" />
        </section>
    )
}