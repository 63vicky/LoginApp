import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";
import home from "./Pages/home";
import NotFound from "./Pages/NotFound";
import login from "./Pages/login";
import dashboard from "./Pages/dashboard";
function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/dashboard"
        >
          Dashboard
        </NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route index Component={home} />
          <Route path="/login" Component={login}></Route>
          <Route path="/dashboard" Component={dashboard}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
