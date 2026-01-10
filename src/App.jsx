import HeaderComponent from "./components/header";
import HomePage from "./pages/home";
import SearchPage from "./pages/search";

function App() {
  return (
    <main className="container-app">
      <HomePage />
      <HeaderComponent />
      <SearchPage />
    </main>
  );
}

export default App;