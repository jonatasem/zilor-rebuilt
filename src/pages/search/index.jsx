import './index.scss';
import { useState } from 'react';

export default function SearchPage() {
    const [stateSearchInput, setStateSearchInput] = useState(false);

    return (
        <section className="container-searchPage">
            <div className="search-input">
                <input type="text" placeholder="Search..." />
                <button>P</button>
            </div>
            
            <div className="btn-close">
                <button onClick={() => setStateSearchInput(false)}>
                    Close
                </button>
            </div>
        </section>
    );
}