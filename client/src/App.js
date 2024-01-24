import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Navigation from "./components/shared/Navigation/Navigation";
import Authenticate from "./pages/Authenticate/Authenticate";
import Activate from "./pages/Activate/Activate";
import Rooms from "./pages/Rooms/Rooms";
// import "bootstrap/dist/css/bootstrap.min.css";

const isAuth = false;
const user = {
  activated: true,
};

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* Guest route */}
        <Route
          path="/"
          element={
            !isAuth ? <Home /> : <Navigate to="/rooms" state={{ from: "/" }} />
          }
        />
        <Route
          path="/authenticate"
          element={
            !isAuth ? (
              <Authenticate />
            ) : (
              <Navigate to="/rooms" state={{ from: "/authenticate" }} />
            )
          }
        />
        {/* semi protected area */}
        <Route
          path="/activate"
          element={
            !isAuth ? (
              <Navigate to="/" state={{ from: "/activate" }} />
            ) : isAuth && !user.activated ? (
              <Activate />
            ) : (
              <Navigate to="/rooms" state={{ from: "/activate" }} />
            )
          }
        />
        {/* Protected routes */}
        <Route
          path="/rooms"
          element={
            !isAuth ? (
              <Navigate to="/" state={{ from: "/rooms" }} />
            ) : isAuth && !user.activated ? (
              <Navigate to="/activate" state={{ from: "/rooms" }} />
            ) : (
              <Rooms />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
