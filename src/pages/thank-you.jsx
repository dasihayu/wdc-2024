import { useNavigate } from "react-router";
import ThemedButton from "../components/ThemedButton.jsx";

const Sparkle = ({ className = "" }) => (
	<svg
		className={`absolute w-6 h-6 text-white/80 ${className}`}
		viewBox="0 0 24 24"
		fill="currentColor"
	>
		<path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
	</svg>
);

const Circle = ({ className = "" }) => (
	<div className={`absolute w-8 h-8 rounded-full bg-white/20 ${className}`} />
);

export default function ThankYouPage() {
	const navigate = useNavigate();

	return (
		<main className="relative flex flex-col items-center justify-center w-full min-h-screen px-5 overflow-hidden text-white bg-primary">
			{/* Background Decorations */}
			<Sparkle className="top-[15%] left-[20%] animate-pulse" />
			<Sparkle className="top-[25%] right-[25%] w-4 h-4 animate-pulse delay-75" />
			<Sparkle className="bottom-[30%] left-[30%] w-5 h-5 animate-pulse delay-100" />
			<Sparkle className="bottom-[20%] right-[20%] w-3 h-3 animate-pulse delay-150" />
			<Sparkle className="top-[40%] left-[15%] w-4 h-4 animate-pulse delay-200" />
			<Sparkle className="bottom-[35%] right-[15%] animate-pulse delay-300" />

			<Circle className="top-[10%] left-[10%] animate-pulse" />
			<Circle className="top-[20%] right-[30%] w-6 h-6 animate-pulse delay-75" />
			<Circle className="bottom-[25%] left-[25%] w-10 h-10 animate-pulse delay-150" />
			<Circle className="bottom-[15%] right-[20%] w-12 h-12 animate-pulse delay-200" />

			{/* Main Content */}
			<div className="flex flex-col items-center max-w-sm space-y-6 text-center">
				{/* Success Icon */}
				<div className="flex items-center justify-center w-20 h-20 mb-2 bg-white rounded-full">
					<svg
						className="w-12 h-12 text-primary"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="3"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<path d="M20 6L9 17L4 12" />
					</svg>
				</div>

				{/* Text Content */}
				<h1 className="text-2xl font-semibold">
					Terima kasih atas laporan anda
				</h1>

				<p className="text-base text-white/90">
					Laporan berhasil, laporan yang anda berikan akan segera kami tindak
					lanjuti
				</p>

				{/* Button */}
				<ThemedButton
					onClick={() => navigate("/landing-page")}
					type="secondary"
					className="w-full mt-4 transition-colors bg-white text-primary hover:bg-white/90"
				>
					Selesai
				</ThemedButton>
			</div>
		</main>
	);
}
