import { Routers } from "./router/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/App.css";
import { useLoadingContext } from "./context";
import { LoadingPortal } from "./components";
function App() {
  const { isLoading } = useLoadingContext();
  return (
    <Router>
      {isLoading && <LoadingPortal />}
      <Routers />
    </Router>
  );
}

export default App;
