import { useTranslation } from 'react-i18next';
import { 
    FaSearch,
    FaLinkedin,
    FaYoutube
} from "react-icons/fa";
import './index.scss';

export default function HeaderComponent(){
    const { t, i18n } = useTranslation();

    const alterarIdioma = (sigla) => {
        i18n.changeLanguage(sigla);
    };

    return (
        <header className="container-header">
            <article className="logo">
                <img 
                    src={t('logo_url')} 
                    alt={t('logo_alt')}
                />
            </article>
            <article className="language">
                <button onClick={() => alterarIdioma('pt')}>PT</button>|
                <button onClick={() => alterarIdioma('en')}>EN</button>|
                <button onClick={() => alterarIdioma('es')}>ES</button>
                <div className="menu-header">
                    <div className="search-header">
                        <FaSearch className='icon-search'/>
                    </div>
                    <div className="social-media">
                        <FaLinkedin className='icon-linkedin'/>
                        <FaYoutube className='icon-youtube'/>
                    </div>
                </div>
            </article>
        </header>
    )
}