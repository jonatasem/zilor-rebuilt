import { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export function SearchProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');

    const openSearch = () => setIsOpen(true);
    const closeSearch = () => {
        setIsOpen(false);
        setQuery('');
    };
    const toggleSearch = () => setIsOpen(prev => !prev);

    return (
        <SearchContext.Provider value={{ isOpen, query, setQuery, openSearch, closeSearch, toggleSearch }}>
            {children}
        </SearchContext.Provider>
    );
}

// Hook personalizado para facilitar o uso do contexto
export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch deve ser usado dentro de un SearchProvider');
    }
    return context;
}
