import { useNavigate } from "react-router";

export default function App() {
	const navigate = useNavigate();

	return (
		<div
			className="flex flex-col justify-end w-full h-screen text-center text-neutral-primary px-9 py-14"
			style={{ backgroundImage: `url('/main-page.jpg')` }}
		>
			<h1 className="text-4xl font-bold h5">
				Lindungi Bumi, Mulai dari Langkah Kecil Anda!
			</h1>
			<p className="pt-4 pb-6 description">
				Laporkan isu lingkungan, edukasi diri, dan bergabung dalam komunitas
				peduli lingkungan.
			</p>
			<button
				type="button"
				className="w-full py-2 rounded-lg bg-primary"
				onClick={() => navigate("/landing-page")}
			>
				Mulai
			</button>
		</div>
	);
}
