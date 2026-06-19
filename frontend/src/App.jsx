import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
<>
  <Toaster
    position="top-right"
    toastOptions={{
      duration: 3000,
    }}
  />

  {/* Routes */}
</>
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
          element={
         <ProtectedRoute>
         <AdminDashboard />
         </ProtectedRoute>
         }
          />
        </Routes>
        

    </BrowserRouter>
  );
}

export default App;