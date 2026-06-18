import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Portfolio Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* Admin Dashboard */}
        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;