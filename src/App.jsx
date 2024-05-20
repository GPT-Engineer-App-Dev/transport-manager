import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import VehicleManagement from "./pages/VehicleManagement.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/vehicle-management" element={<VehicleManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
