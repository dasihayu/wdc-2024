import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import RegisterPage from "./pages/auth/register.jsx";
import LandingPage from "./pages/landing-page.jsx";

const root = document.getElementById("root");

createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/landing-page" element={<LandingPage />} />
			<Route path="/register" element={<RegisterPage />} />
		</Routes>
	</BrowserRouter>,
);
