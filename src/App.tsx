import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import Login from "./pages/Login/Login";
import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { Bounce, ToastContainer } from "react-toastify";
import Dashboard from "./pages/Dashboard/Dashboard";
import { useState } from "react";

const App = () => {
  localStorage.getItem("isLoggedIn") === "true";
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" || false
  );

  return (
    <MantineProvider>
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <>
              <Route path="/dashboard" element={<Dashboard setIsLoggedIn={setIsLoggedIn}   />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </>
          )}
        </Routes>
        <ToastContainer
          style={{
            background: "transparent",
            marginLeft: "130px",
          }}
          toastStyle={{
            padding: "20px",
          }}
          position="top-center"
          transition={Bounce}
          limit={3}
        />
      </BrowserRouter>
    </MantineProvider>
  );
};

export default App;
