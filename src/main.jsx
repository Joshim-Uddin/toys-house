import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Routes from "./Routes/Routes.jsx";
import AuthProviders from "./components/Providers/AuthProviders.jsx";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <Routes />
    </AuthProviders>
  </React.StrictMode>
);
