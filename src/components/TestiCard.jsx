import { number, string } from "prop-types";

export default function TestiCard({
	src = "",
	alt = "",
	name = "",
	year = number,
	testimony = "",
}) {
	return (
		<div className="min-w-[280px] max-w-sm bg-neutral-secondary rounded-lg border border-grey-border flex-shrink-0 mx-2 overflow-hidden text-black p-4">
			<div className="flex items-center gap-3 mb-4">
				<div className="flex-shrink-0 w-12 h-12">
					<img
						src={src}
						alt={alt}
						className="object-cover w-full h-full rounded-full"
					/>
				</div>
				<div>
					<h3 className="body-larger">{name}</h3>
					<p className="text-grey body-medium">{year}</p>
				</div>
			</div>

			<p className="body-medium">{testimony}</p>
		</div>
	);
}

TestiCard.propTypes = {
	src: string.isRequired,
	alt: string.isRequired,
	name: string.isRequired,
	year: number.isRequired,
	testimony: string.isRequired,
};
