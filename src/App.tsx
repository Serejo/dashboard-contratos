import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/index.tsx";
import Sidebar from "./components/Sidebar";
import "./App.css";

function App() {
  return (
    <Router>
      <Sidebar />
      <div
        className="flex h-screen "
        style={{ width: innerWidth, backgroundColor: "#F6F7FB" }}
      >
        <main className="flex-1 p-4 ml-64">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;
