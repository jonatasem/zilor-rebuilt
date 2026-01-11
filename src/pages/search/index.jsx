import './index.scss';
import { useSearch } from '../../context/SearchContext';
import { RiCloseLargeFill } from "react-icons/ri";

export default function SearchPage() {
    const { isOpen, closeSearch, query, setQuery } = useSearch();

    if (!isOpen) return null;

    return (
        <section className="container-searchPage">
            <div className="search-input">
                <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Buscar..."
                    autoFocus // Foca automaticamente ao abrir
                />
                <button onClick={() => console.log("Pesquisando:", query)}>P</button>
            </div>
            <div className="btn-close">
                <button onClick={closeSearch}>
                    <RiCloseLargeFill />
                </button>
            </div>
        </section>
    );
}
