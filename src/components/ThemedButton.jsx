import clsx from "clsx";
import { func } from "prop-types";
import { node, oneOf, string } from "prop-types";

export default function ThemedButton({
	src = "",
	alt = "",
	children,
	className = "",
	type = "primary",
	onClick = () => {},
}) {
	const baseStyle =
		"w-full h-full flex py-4 button rounded-lg items-center justify-center";

	const buttonStyles = clsx(
		baseStyle,
		type === "primary" && "bg-primary text-neutral-secondary",
		type === "secondary" &&
			"bg-white text-black border-green-border border text-black",
		className,
	);

	return (
		<button type="button" className={buttonStyles} onClick={onClick}>
			<img src={src} alt={alt} className="pr-3" />
			{children}
		</button>
	);
}

ThemedButton.propTypes = {
	src: string,
	alt: string,
	className: string,
	children: node.isRequired,
	type: oneOf(["primary", "secondary"]),
	onClick: func.isRequired,
};
