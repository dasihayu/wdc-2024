import Hamburger from "hamburger-react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import ChatBot from "../components/ChatBot.jsx";
import DonationCard from "../components/DonationCard.jsx";
import LandingForm from "../components/LandingForm.jsx";
import TestiCard from "../components/TestiCard.jsx";
import { DONATION_CARD, IMAGE_LANDING, TESTI_CARD } from "../constant/index.js";

export default function LandingPage() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const navigate = useNavigate();

	const breakpoints = {
		default: 2,
	};

	return (
		<>
			<nav className="flex justify-between px-3 py-4 bg-secondary">
				<img src="/logo-white.png" alt="Logo SABUK" className="w-16" />
				<Hamburger
					toggled={isMenuOpen}
					toggle={setIsMenuOpen}
					color="#FDFDFD"
				/>
			</nav>
			<main
				style={{ backgroundImage: "url('/main-page.jpg')" }}
				className="relative items-center justify-center h-screen bg-center bg-cover"
			>
				<div className="absolute inset-0 z-0 bg-secondary/40" />
				<div className="relative flex flex-col items-center justify-center">
					<h1 className="py-5 text-2xl font-semibold text-center px-14 text-neutral-primary">
						Lindungi Bumi, Mulai dari Langkah Kecil Anda!
					</h1>
					<section className="px-8 py-8 bg-white rounded-t-[32px]">
						<h2 className="mb-4 text-xl font-semibold text-center text-green-secondary">
							Laporkan Isu lingkungan yang ada disekitar
						</h2>
						<p className="text-sm font-medium text-center">
							Kami merancang website ini untuk memudahkan Anda melaporkan
							berbagai isu lingkungan yang terjadi di sekitar, terutama terkait
							permasalahan sampah. Ayo laporkan sekarang isu dilingkungan anda
						</p>
						<LandingForm />
					</section>
					<section className="flex flex-col items-center justify-center bg-secondary">
						<div className="px-8 py-8 text-neutral-primary">
							<h2 className="mb-4 text-xl font-semibold text-center">
								Jelajahi pengetahuan bersama <br />
								Eco-AI
							</h2>
							<p className="text-sm font-medium text-center">
								Jelajahi pengetahuan bersama Eco-AI, asisten cerdas yang
								dirancang khusus untuk memberikan informasi dan solusi terkait
								sampah. Mulai dari cara mendaur ulang, mengurangi limbah, hingga
								memahami dampak lingkungan.
							</p>
							<ChatBot />
						</div>
					</section>
					<section className="px-8 py-8 bg-white rounded-3xl">
						<h2 className="mb-4 text-xl font-semibold text-center text-green-secondary">
							Gabung dan Wujudkan Perubahan untuk Lingkungan!
						</h2>
						<p className="text-sm font-medium text-center">
							Ayo, jadi bagian dari solusi dengan bergabung sebagai relawan!
							Dengan langkah kecil Anda, kita bisa menciptakan dampak besar
							untuk lingkungan yang lebih bersih dan sehat. Jangan tunggu
							lagi—mulai aksi nyata bersama kami sekarang!
						</p>
						<Masonry
							breakpointCols={breakpoints}
							className="mt-12 my-masonry-grid"
							columnClassName="my-masonry-grid_column"
						>
							{IMAGE_LANDING.map((img) => (
								<div key={img.id} className="">
									<img
										src={img.src}
										alt={img.alt}
										className="w-full rounded-lg"
									/>
								</div>
							))}
						</Masonry>
						<button
							className="flex flex-row items-start px-2 py-2 text-base text-white rounded-lg bg-secondary w-fit justify-items-center"
							type="button"
							onClick={() => navigate("/register")}
						>
							<p>Gabung Sekarang</p>
							<img src="/Arrow-up-right.svg" alt="" />
						</button>
					</section>
					<section className="w-full px-5 bg-primary text-neutral-secondary py-7">
						<h2 className="pb-5 h6">
							Bersama untuk Bumi: Donasi Anda, Aksi Kami
						</h2>
						<p className="pt-4 pb-6 body-medium">
							Dukung program lingkungan kami dengan donasi Anda. Setiap
							kontribusi membantu mendanai kegiatan komunitas, edukasi
							lingkungan, dan aksi nyata seperti penanaman pohon dan pembersihan
							sampah
						</p>
						<div className="flex pb-4 overflow-x-auto">
							{DONATION_CARD.map((card) => (
								<DonationCard
									key={card.id}
									alt={card.alt}
									currentAmount={card.currentAmount}
									description={card.description}
									donation={card.donation}
									progress={card.progress}
									src={card.src}
									targetAmount={card.targetAmount}
									title={card.title}
								/>
							))}
						</div>
						<button
							className="flex flex-row items-start px-2 py-2 text-base text-white border rounded-lg border-grey-border bg-secondary w-fit justify-items-center"
							type="button"
						>
							<p>Ikut Berdonasi</p>
							<img src="/Arrow-up-right.svg" alt="" />
						</button>
					</section>
					<section className="w-full px-5 py-7">
						<h2 className="text-center text-green-secondary h6">
							Apa Kata Mereka?
						</h2>
						<p className="pt-6 text-center pb-7 body-medium">
							Ayo, jadi bagian dari solusi dengan bergabung sebagai volunteer!
							Dengan langkah kecil Anda, kita bisa menciptakan dampak besar
							untuk lingkungan yang lebih bersih dan sehat. Jangan tunggu
							lagi—mulai aksi nyata bersama kami sekarang!
						</p>
						<div className="flex gap-4 pb-4 overflow-x-auto scrollbar-hide">
							{TESTI_CARD.map((card) => (
								<TestiCard
									key={card.id}
									src={card.src}
									alt={card.alt}
									name={card.name}
									year={card.year}
									testimony={card.testimony}
								/>
							))}
						</div>
					</section>
				</div>
				<footer className="p-8 text-white bg-green-700">
					<div className="flex items-center justify-between mb-8">
						<div className="mb-4">
							<img src="/resources/figma.svg" alt="" />
						</div>
						<div className="flex gap-4">
							<Link to="#" className="text-white hover:opacity-80">
								<img src="/resources/X.svg" alt="" />
							</Link>
							<Link to="#" className="text-white hover:opacity-80">
								<img src="/resources/Instagram.svg" alt="" />
							</Link>
							<Link to="#" className="text-white hover:opacity-80">
								<img src="/resources/YouTube.svg" alt="" />
							</Link>
							<Link to="#" className="text-white hover:opacity-80">
								<img src="/resources/LinkedIn.svg" alt="" />
							</Link>
						</div>
					</div>
					<div className="grid grid-cols-1 gap-8 md:grid-cols-2">
						<div>
							<h2 className="mb-4 text-xl font-semibold">Use cases</h2>
							<nav className="flex flex-col space-y-2">
								<Link to="/ui-design" className="hover:opacity-80">
									UI design
								</Link>
								<Link to="/ux-design" className="hover:opacity-80">
									UX design
								</Link>
								<Link to="/wireframing" className="hover:opacity-80">
									Wireframing
								</Link>
								<Link to="/diagramming" className="hover:opacity-80">
									Diagramming
								</Link>
								<Link to="/brainstorming" className="hover:opacity-80">
									Brainstorming
								</Link>
								<Link to="/online-whiteboard" className="hover:opacity-80">
									Online whiteboard
								</Link>
								<Link to="/team-collaboration" className="hover:opacity-80">
									Team collaboration
								</Link>
							</nav>
						</div>

						<div>
							<h2 className="mb-4 text-xl font-semibold">Resources</h2>
							<nav className="flex flex-col space-y-2">
								<Link to="/blog" className="hover:opacity-80">
									Blog
								</Link>
								<Link to="/best-practices" className="hover:opacity-80">
									Best practices
								</Link>
								<Link to="/colors" className="hover:opacity-80">
									Colors
								</Link>
								<Link to="/color-wheel" className="hover:opacity-80">
									Color wheel
								</Link>
								<Link to="/support" className="hover:opacity-80">
									Support
								</Link>
								<Link to="/developers" className="hover:opacity-80">
									Developers
								</Link>
								<Link to="/resource-library" className="hover:opacity-80">
									Resource library
								</Link>
							</nav>
						</div>
					</div>
				</footer>
			</main>
		</>
	);
}
