import Hamburger from "hamburger-react";
import { useState } from "react";
import Masonry from "react-masonry-css";
import LandingForm from "../components/LandingForm";
import ChatBot from "../components/ChatBot";

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Placeholder images
  const images = [
    "https://placehold.co/300x400",
    "https://placehold.co/300x300",
    "https://placehold.co/300x500",
    "https://placehold.co/300x450",
  ];

  const breakpoints = {
    default: 2, // 1 column for very small screens
  };

  return (
    <div>
      <nav className="flex justify-between px-3 py-4 bg-secondary">
        <img src="/logo-white.png" alt="Logo SABUK" className="w-16" />
        <Hamburger
          toggled={isMenuOpen}
          toggle={setIsMenuOpen}
          color="#FDFDFD"
        />
      </nav>
      <section
        style={{ backgroundImage: "url('/main-page.jpg')" }}
        className="relative items-center justify-center h-screen bg-center bg-cover"
      >
        <div className="absolute inset-0 bg-secondary/40 z-0"></div>
        <div className="relative flex flex-col items-center justify-center">
          <h1 className="px-14 py-5 text-2xl font-semibold text-center text-neutral-primary">
            Lindungi Bumi, Mulai dari Langkah Kecil Anda!
          </h1>
          <div className="px-8 py-8 bg-white rounded-t-[32px]">
            <h2 className="text-green-secondary text-center text-xl font-semibold mb-4">
              Laporkan Isu lingkungan yang ada disekitar
            </h2>
            <p className="text-center text-sm font-medium">
              Kami merancang website ini untuk memudahkan Anda melaporkan
              berbagai isu lingkungan yang terjadi di sekitar, terutama terkait
              permasalahan sampah. Ayo laporkan sekarang isu dilingkungan anda
            </p>
            <LandingForm />
          </div>
          <div className="flex flex-col items-center justify-center bg-secondary">
            <div className="px-8 py-8 text-neutral-primary">
              <h2 className="text-center text-xl font-semibold mb-4">
                Jelajahi pengetahuan bersama <br />
                Eco-AI
              </h2>
              <p className="text-center text-sm font-medium">
                Jelajahi pengetahuan bersama Eco-AI, asisten cerdas yang
                dirancang khusus untuk memberikan informasi dan solusi terkait
                sampah. Mulai dari cara mendaur ulang, mengurangi limbah, hingga
                memahami dampak lingkungan.
              </p>
              <ChatBot />
            </div>
          </div>
          <div className="px-8 py-8 bg-white rounded-3xl">
            <h2 className="text-green-secondary text-center text-xl font-semibold mb-4">
              Gabung dan Wujudkan Perubahan untuk Lingkungan!
            </h2>
            <p className="text-center text-sm font-medium">
              Ayo, jadi bagian dari solusi dengan bergabung sebagai relawan!
              Dengan langkah kecil Anda, kita bisa menciptakan dampak besar
              untuk lingkungan yang lebih bersih dan sehat. Jangan tunggu
              lagi—mulai aksi nyata bersama kami sekarang!
            </p>
            <Masonry
              breakpointCols={breakpoints}
              className="my-masonry-grid mt-12"
              columnClassName="my-masonry-grid_column"
            >
              {images.map((src, index) => (
                <div key={index} className="">
                  <img
                    src={src}
                    alt={`Placeholder ${index + 1}`}
                    className="w-full rounded-lg"
                  />
                </div>
              ))}
            </Masonry>
            <button className="bg-secondary text-base w-fit px-2 text-white rounded-lg py-2 flex items-start flex-row justify-items-center">
			  <p>Gabung Sekarang</p>
			  <img src="/Arrow-up-right.svg" alt="" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
