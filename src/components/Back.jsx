import { string } from "prop-types";
import { func } from "prop-types";

export default function Back({ onClick = () => {}, name = "" }) {
	return (
		<button
			type="button"
			className="flex items-center px-4 py-2 text-white rounded-md bg-primary"
			onClick={onClick}
		>
			<img src="/arrow-left.svg" alt="Button Back" className="pr-2" />
			{name}
		</button>
	);
}

Back.propsTypes = {
	onClick: func,
	name: string,
};
