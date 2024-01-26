import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";

const isAuth = false;
const user = {
  activated: true,
};

function GuestRoute({ children }) {
  const location = useLocation();
  return isAuth ? (
    <Navigate to="/rooms" state={{ from: location }} replace />
  ) : (
    children
  );
}

function SemiProtectedRoute({ children }) {
  const location = useLocation();
  return isAuth && !user.activated ? (
    children
  ) : (
    <Navigate to={isAuth ? "/rooms" : "/"} state={{ from: location }} replace />
  );
}

function ProtectedRoute({ children }) {
  const location = useLocation();
  return isAuth && user.activated ? (
    children
  ) : (
    <Navigate
      to={isAuth && !user.activated ? "/activate" : "/"}
      state={{ from: location }}
      replace
    />
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <GuestRoute>
              <Home />
            </GuestRoute>
          }
        />
        <Route
          path="/authenticate"
          element={
            <GuestRoute>
              <Authenticate />
            </GuestRoute>
          }
        />
        <Route
          path="/activate"
          element={
            <SemiProtectedRoute>
              <Activate />
            </SemiProtectedRoute>
          }
        />
        <Route
          path="/rooms"
          element={
            <ProtectedRoute>
              <Rooms />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
