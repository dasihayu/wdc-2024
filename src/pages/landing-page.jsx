import Hamburger from "hamburger-react";
import { useState } from "react";

export default function LandingPage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<div>
			<nav className="justify-between bg-primary py-3 flex">
				<img src="/logo-white.png" alt="Logo SABUK" />
				<Hamburger
					toggled={isMenuOpen}
					toggle={setIsMenuOpen}
					color="#FDFDFD"
				/>
			</nav>
			<section
				style={{ backgroundImage: "url('/main-page.jpg')" }}
				className="bg-cover bg-center h-screen items-center justify-center"
			>
				<h1 className="text-neutral-primary pt-4">
					Lindungi Bumi, Mulai dari Langkah Kecil Anda!
				</h1>
				<div className="bg-white ">
					<h2 className="text-green-secondary h6">
						Laporkan Isu lingkungan yang ada disekitar
					</h2>
					<p>
						Kami merancang website ini untuk memudahkan Anda melaporkan berbagai
						isu lingkungan yang terjadi di sekitar, terutama terkait
						permasalahan sampah. Ayo laporkan sekarang isu dilingkungan anda
					</p>
				</div>
			</section>
		</div>
	);
}
