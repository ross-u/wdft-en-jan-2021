import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MovieList from "./components/MovieList/MovieList";
// import SimpleList from "./components/SimpleList";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <SimpleList /> */}
      <MovieList />
    </div>
  );
}

export default App;
