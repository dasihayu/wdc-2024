import { useState } from "react";
import { useNavigate } from "react-router";
import { ActivityCard } from "../components/ActivityCard.jsx";
import Back from "../components/Back.jsx";
import { activities } from "../constant/index.js";

export default function ActivityList() {
	const [searchQuery, setSearchQuery] = useState("");
	const navigate = useNavigate();

	const filteredActivities = activities.filter((activity) =>
		activity.title.toLowerCase().includes(searchQuery.toLowerCase()),
	);

	return (
		<main className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="px-4 pt-4 pb-6 text-white bg-primary">
				<div className="flex items-center justify-between">
					<Back name="Kembali" onClick={() => navigate("/landing-page")} />
					<button onClick={() => navigate("/profile")} className="size-10">
						<img src="/anonnymous-avatar.png" alt="" />
					</button>
				</div>
				{/* Search Bar */}
				<div className="relative mt-4">
					<img
						src="/icons/Search.svg"
						alt=""
						className="absolute w-4 h-4 transform -translate-y-1/2 left-4 top-1/2"
					/>
					<input
						type="text"
						placeholder="Telusuri"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						className="w-full h-12 pl-12 pr-4 text-white rounded-lg bg-white/10 placeholder-white/70 focus:outline-none focus:bg-white/20"
					/>
				</div>
			</div>

			{/* Activity Title */}
			<div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-gray-100">
				<img src="/icons/group-line.svg" alt="" className="w-5 h-5" />
				<h2 className="text-lg font-medium">Aktivitas</h2>
			</div>

			{/* Activity List */}
			<div className="divide-y divide-gray-100">
				{filteredActivities.map((activity, index) => (
					<ActivityCard key={index} {...activity} />
				))}
			</div>
		</main>
	);
}
