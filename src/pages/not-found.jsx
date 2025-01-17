import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
	const navigate = useNavigate();

	return (
		<main className="flex flex-col items-center justify-center min-h-screen px-4 bg-white">
			{/* 404 SVG Illustration */}
			<svg
				className="w-64 h-64 mb-8"
				viewBox="0 0 200 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<circle cx="100" cy="100" r="96" fill="#f0fdf4" />
				<path
					d="M65 80 L85 100 L65 120 M135 80 L115 100 L135 120"
					stroke="#059669"
					strokeWidth="8"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M95 130 C95 130, 105 130, 105 130"
					stroke="#059669"
					strokeWidth="8"
					strokeLinecap="round"
				/>
			</svg>

			{/* Error Message */}
			<h1 className="mb-4 text-4xl font-bold text-center text-gray-900">
				Halaman Tidak Ditemukan
			</h1>
			<p className="max-w-md mb-8 text-center text-gray-600">
				Maaf, halaman yang Anda cari tidak dapat ditemukan. Silakan kembali ke
				halaman sebelumnya atau ke beranda.
			</p>

			{/* Action Buttons */}
			<div className="flex flex-col gap-4 sm:flex-row">
				<button
					onClick={() => navigate(-1)}
					className="px-6 py-3 transition-colors border-2 rounded-lg border-primary text-primary hover:bg-primary hover:text-white"
				>
					Kembali
				</button>
				<button
					onClick={() => navigate("/")}
					className="px-6 py-3 text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark"
				>
					Ke Beranda
				</button>
			</div>
		</main>
	);
}
