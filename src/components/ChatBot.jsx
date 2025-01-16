import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const recommendedTopics = [
  "cara mendaur ulang sampah dirumah?",
  "bagaimana cara composting?",
  "tips hemat energi dirumah",
  "cara membuat eco-brick",
  "manfaat energi terbarukan",
  "cara menghemat air",
];

function ChatBot() {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-[#EDEDED] flex items-center flex-col justify-center p-6 md:p-8 mt-6 rounded-lg gap-4">
        <div className="flex flex-row justify-between items-center gap-3 w-full max-w-lg">
          <img src="/sparkling-line.svg" alt="" className="w-6 h-6" />
          <h1 className="font-medium text-lg text-black flex-grow text-center">
            Apa yang ingin kamu ketahui?
          </h1>
          <img src="/sparkling-line.svg" alt="" className="w-6 h-6" />
        </div>
        
        <div className="flex flex-row justify-between gap-2 w-full max-w-lg bg-white border border-[#D9D9D9] rounded-3xl py-2.5 px-4 hover:border-secondary transition-colors">
          <input 
            type="text" 
            placeholder="Tanya Apapun tentang Lingkungan!" 
            className="text-sm w-full focus:outline-none text-black" 
          />
          <img src="/Search.svg" alt="" className="w-5 h-5" />
        </div>
        
        <div className="w-full max-w-lg">
          <p className="text-black text-sm mb-2">Rekomendasi topik</p>
          
          <Swiper
            slidesPerView="auto"
            spaceBetween={8}
            className="w-full"
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 16,
              }
            }}
          >
            {recommendedTopics.map((topic, index) => (
              <SwiperSlide 
                key={index}
                className="!w-auto"
              >
                <button className="text-black text-sm bg-white rounded-full py-2 px-4 hover:bg-secondary/10 transition-colors whitespace-nowrap">
                  {topic}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;