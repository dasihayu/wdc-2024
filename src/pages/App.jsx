export default function App() {
	return (
		<div
			className="w-full h-screen text-neutral-primary px-9 py-14 flex flex-col justify-end text-center"
			style={{ backgroundImage: `url('/main-page.jpg')` }}
		>
			<h1 className="text-4xl font-bold h5">
				Lindungi Bumi, Mulai dari Langkah Kecil Anda!
			</h1>
			<p className="pt-4 pb-6 description">
				Laporkan isu lingkungan, edukasi diri, dan bergabung dalam komunitas
				peduli lingkungan.
			</p>
			<button type="button" className="py-2 bg-primary rounded-lg w-full">
				Mulai
			</button>
		</div>
	);
}
