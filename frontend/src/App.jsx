
import { useEffect } from "react";
import testConnection from "./services/testConnection";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  useEffect(() => {
    testConnection();
  }, []);

  return <Dashboard />;
}

export default App;
