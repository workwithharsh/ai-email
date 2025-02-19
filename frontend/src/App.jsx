import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { HomePage, ResponsePage } from "./pages/Pages.js";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/response" element={<ResponsePage />} />
    </Routes>
  </Router>
);

export default App;
