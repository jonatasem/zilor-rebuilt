import { Routes, Route } from 'react-router-dom';
import HomePage from "../pages/home";
import AboutPage from "../pages/about";
import SearchPage from "../pages/search";
import WorkWithUs from '../pages/work-with-us';

export default function RoutesDefault() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/work-us" element={<WorkWithUs />} />
        </Routes>
    );
}
