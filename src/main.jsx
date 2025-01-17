import { createRoot } from "react-dom/client";
import App from "./pages/App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import ActivityList from "./pages/activity.jsx";
import LoginPage from "./pages/auth/login.jsx";
import OTPPage from "./pages/auth/otp.jsx";
import RegisterPage from "./pages/auth/register.jsx";
import LandingPage from "./pages/landing-page.jsx";
import NotFoundPage from "./pages/not-found.jsx";
import ProfilePage from "./pages/profile.jsx";
import ThankYouPage from "./pages/thank-you.jsx";

const root = document.getElementById("root");

createRoot(root).render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/landing-page" element={<LandingPage />} />
			<Route path="/register" element={<RegisterPage />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/otp" element={<OTPPage />} />
			<Route path="/profile" element={<ProfilePage />} />
			<Route path="/thank-you" element={<ThankYouPage />} />
			<Route path="/activity" element={<ActivityList />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	</BrowserRouter>,
);
