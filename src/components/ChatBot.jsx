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
    <div>
      <div className="bg-[#EDEDED] flex items-center flex-col justify-center p-6 mt-6 rounded-lg gap-4 max-w-80">
        <div className="flex flex-row justify-between gap-2">
          <img src="/sparkling-line.svg" alt="" />
          <h1 className="font-medium text-base text-black">Apa yang ingin kamu ketahui?</h1>
        </div>
        
        <div className="flex flex-row justify-between gap-2 w-full bg-white border border-[#D9D9D9] rounded-3xl py-2 px-4">
          <input 
            type="text" 
            placeholder="Tanya Apapun tentang Lingkungan!" 
            className="text-sm w-full focus:outline-none text-black" 
          />
          <img src="/Search.svg" alt="" />
        </div>
        
        <p className="text-black text-xs">Rekomendasi topik</p>
        
        <div className="w-full">
          <Swiper
            slidesPerView="auto"
            spaceBetween={8}
            className="w-full"
          >
            {recommendedTopics.map((topic, index) => (
              <SwiperSlide 
                key={index}
                className="!w-auto"
              >
                <p className="text-black text-xs bg-white rounded-full p-2 whitespace-nowrap">
                  {topic}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ChatBot;