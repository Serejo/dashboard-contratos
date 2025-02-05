import { BrowserRouter as Router, useLocation } from "react-router-dom";
import AppRoutes from "./routes/index.tsx";
import Sidebar from "./components/Sidebar";
import "./App.css";

function Layout() {
  const themeColor = "#F6F7FB";
  const location = useLocation();

  return (
    <div
      className=""
      style={{
        width: innerWidth,
        backgroundColor: themeColor,
        display: "flex",
      }}
    >
      {location.pathname !== "/login" && <Sidebar />}
      <main
        className={`flex-1 p-4 bg-white ${
          location.pathname !== "/login" ? "ml-64" : ""
        }`}
        style={{ minHeight: "100vh", overflow: "auto" }}
      >
        <AppRoutes />
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
