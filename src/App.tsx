import "./App.css";
import "animate.css";
import Routes from "./routes";
import { useStore, AppContext } from "./context/AppContext";

function App() {
  const store = useStore();


  return (
    <AppContext.Provider value={store}>
      <Routes />
    </AppContext.Provider>
  );
}

export default App;
