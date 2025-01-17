export const ActivityCard = ({
	image = "",
	title = "",
	organization = "",
	date = "",
	location = "",
}) => {
	return (
		<div className="flex gap-3 p-4 bg-white border-b border-gray-100">
			<img
				src={image}
				alt={title}
				className="object-cover w-16 h-16 rounded-lg"
			/>
			<div className="flex-1">
				<h3 className="mb-1 text-base font-medium text-gray-900 line-clamp-2">
					{title}
				</h3>
				{organization && (
					<p className="flex items-center gap-1 mb-1 text-sm text-gray-600">
						<img src="/icons/Generic avatar.svg" alt="" className="w-4 h-4" />
						{organization}
					</p>
				)}
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-1">
						<img
							src="/icons/calendar-schedule-line.svg"
							alt=""
							className="w-4 h-4"
						/>
						<span className="text-xs text-gray-500">{date}</span>
					</div>
					<div className="flex items-center gap-1">
						<img
							src="/icons/map-pin-range-line.svg"
							alt=""
							className="w-4 h-4"
						/>
						<span className="text-xs text-gray-500">{location}</span>
					</div>
				</div>
			</div>
		</div>
	);
};
