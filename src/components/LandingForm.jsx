import React, { useState } from "react";
import LocationPicker from "./LocationPicker";

function LandingForm() {
  const [fileName, setFileName] = useState("Tidak ada file yang dipilih");
  const [location, setLocation] = useState(null);

  const handleLocationSelect = (coords) => {
    setLocation(coords);
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form className="flex flex-col justify-center items-center shadow-md rounded-lg p-6 md:p-8 gap-6">
        <div className="flex flex-col w-full max-w-md gap-2">
          <label htmlFor="name" className="font-semibold">
            Nama
          </label>
          <input
            type="text"
            placeholder="Nama lengkap"
            name="name"
            className="border border-secondary rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
          />
        </div>
        
        <div className="flex flex-col w-full max-w-md gap-2">
          <label htmlFor="isu" className="font-semibold">
            Laporkan Isu
          </label>
          <input
            type="text"
            placeholder="Isu yang ingin dilaporkan"
            name="isu"
            className="border border-secondary rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
          />
        </div>

        <div className="flex flex-col w-full max-w-md gap-2">
          <label htmlFor="fileInput" className="font-semibold">
            Unggah Foto
          </label>
          <div className="relative w-full">
            <button
              type="button"
              className="flex items-center gap-3 border border-secondary rounded-lg px-4 py-2 w-full text-left text-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <span className="text-sm bg-[#D9D9D9] py-1.5 px-4 rounded-md">
                Cari..
              </span>
              <span className="truncate">{fileName}</span>
            </button>
            <input
              id="fileInput"
              type="file"
              name="picture"
              className="hidden"
              onChange={(e) =>
                setFileName(
                  e.target.files[0]?.name || "Tidak ada file yang dipilih"
                )
              }
            />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-md gap-2">
          <label htmlFor="description" className="font-semibold">
            Deskripsi
          </label>
          <textarea
            placeholder="Deskripsikan isu"
            name="description"
            className="border border-secondary rounded-lg px-4 py-2 h-32 w-full focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
          />
        </div>

        <div className="flex flex-col w-full max-w-md gap-2">
          <label htmlFor="lokasi" className="font-semibold">
            Lokasi
          </label>
          <div className="w-full">
            <LocationPicker onLocationSelect={handleLocationSelect} />
          </div>
        </div>

        <button className="bg-secondary w-full max-w-md text-white rounded-lg py-3 hover:bg-secondary/90 transition-colors text-base font-medium">
          Buat Laporan
        </button>
      </form>
    </div>
  );
}

export default LandingForm;