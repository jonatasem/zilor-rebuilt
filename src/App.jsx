import { BrowserRouter as Router } from 'react-router-dom';
import HeaderComponent from "./components/header";
import { SearchProvider } from "./context/SearchContext";
import RoutesDefault from "./routes/RoutesDefault";
import AboutPage from './pages/about';

function App() {
  return (
    <SearchProvider>
      <Router>
        <main className="container-app">
          <RoutesDefault />
        </main>
      </Router>
    </SearchProvider>
  );
}

export default App;