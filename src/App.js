import "./App.css";
import Header from "./components/Header/Header";
import AppRoutes from "./components/AppRoutes/AppRoutes";

function App() {
  const isLoggedIn = window.localStorage.getItem("user");

  return (
    <div className="App">
      <Header />
      <AppRoutes isLoggedIn={!!isLoggedIn} />
    </div>
  );
}

export default App;
