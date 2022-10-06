import { NavLink, Route, Routes } from "react-router-dom";
import Settings from "./pages/Settings";
import View from "./pages/View";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app__link-wrapper">
        <NavLink to="/view" className="app-link">
          Просмотр
        </NavLink>
        <NavLink to="/settings" className="app-link">Настройки</NavLink>
      </div>
      <Routes>
        <Route path="/view" element={<View />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
