import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/dashboard.css";

import App from "./App";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(

    <BrowserRouter>

        <AuthProvider>

            <Toaster position="top-right" />

            <App />

        </AuthProvider>

    </BrowserRouter>

);