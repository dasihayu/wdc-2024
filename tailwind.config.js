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
				primary: "#0B894A",
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
					border: "#8BB69B",
				},
				grey: "#757575",
				"grey-border": "#D9D9D9",
				black: "#2C2C2C",
			},
		},
	},
	plugins: [fluid],
};
