import fluid, { extract, fontSize, screens } from "fluid-tailwind";

/** @type {import('tailwindcss').Config} */
export default {
	content: {
		files: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
		extract,
	},
	theme: {
		screens,
		fontSize,
		extend: {
			colors: {
				primary: "#2C2C2C",
				secondary: "#0B894A",
				neutral: {
					primary: "#EDEDED",
					secondary: "#FDFDFD",
				},
				success: "#8BB69B",
				warning: "#D0D053",
				error: "#D06253",
				green: {
					secondary: "#1E9C5D",
				},
			},
		},
	},
	plugins: [fluid],
};
