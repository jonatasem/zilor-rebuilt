
import HeaderComponent from '../../components/header';
import AboutPage from '../about';
import './index.scss';

export default function HomePage(){
    return (
        <section className="container-homePage">
            <HeaderComponent />
            <div className="intro-home">
                <div className="years-home">
                    <h1>79</h1>
                    <p>Anos</p>
                </div>
            </div>
            <div className="home-intro">
                <h1>DA TERRRA À ENERGIA QUE MOVE O MUNDO</h1>
            </div>
            <div className="home-apresentation"></div>
            <AboutPage />
        </section>
    )
}