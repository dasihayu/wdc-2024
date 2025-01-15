import { oneOf, string } from "prop-types";
import { useState } from "react";

export default function FormInput({
	label = "",
	type = "text",
	placeholder = "",
	className = "",
}) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="flex flex-col space-y-1">
			<label className="text-grey">{label}</label>
			<div className="relative">
				<input
					type={type === "password" && showPassword === true ? "text" : type}
					placeholder={placeholder}
					className={`w-full h-12 px-3 border border-grey rounded-lg ${className}`}
				/>
				{type === "password" && (
					<button
						type="button"
						name="show-password"
						aria-label="Toggle password visibility"
						onClick={() => setShowPassword(!showPassword)}
						className="absolute -translate-y-1/2 right-3 top-1/2"
					>
						<img
							src={
								showPassword === true
									? "/public/eye.svg"
									: "/public/eye-off.svg"
							}
							alt="Toggle password visibility"
						/>
					</button>
				)}
			</div>
		</div>
	);
}

FormInput.propTypes = {
	label: string,
	type: oneOf([
		"text",
		"email",
		"password",
		"date",
		"datetime-local",
		"month",
		"week",
		"time",
		"number",
		"tel",
		"url",
		"search",
		"color",
		"checkbox",
		"file",
		"hidden",
		"image",
		"radio",
		"range",
		"reset",
		"submit",
	]),
	placeholder: string,
	className: string,
};
