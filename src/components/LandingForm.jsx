import React from "react";
import { useState } from "react";
import LocationPicker from "./LocationPicker";

function LandingForm() {
  const [fileName, setFileName] = useState("Tidak ada file yang dipilih");
  const [location, setLocation] = useState(null);

  const handleLocationSelect = (coords) => {
    setLocation(coords);
  };
  return (
    <div>
      <form
        action=""
        className="flex flex-col justify-center items-center shadow-md rounded-lg p-6 gap-6"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="font-semibold">
            Nama
          </label>
          <input
            type="text"
            placeholder="Nama lengkap"
            name="name"
            className="border border-secondary rounded-lg px-3 py-1 w-64 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="isu" className="font-semibold">
            Laporkan Isu
          </label>
          <input
            type="text"
            placeholder="Isu yang ingin dilaporkan"
            name="isu"
            className="border border-secondary rounded-lg px-3 py-1 w-64 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="fileInput" className="font-semibold">
            Unggah Foto
          </label>
          <div className="relative w-64">
            <button
              type="button"
              className="flex items-center gap-2 border border-secondary rounded-lg px-3 py-1 w-full text-left text-gray-500 focus:outline-none text-sm"
              onClick={() => document.getElementById("fileInput").click()}
            >
              <p className="text-sm bg-[#D9D9D9] py-1 px-3 rounded-md">
                Cari..
              </p>{" "}
              {fileName}
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

        <div className="flex flex-col gap-1">
          <label htmlFor="description" className="font-semibold">
            Deskripsi
          </label>
          <textarea
            placeholder="Deskripsikan isu"
            name="descriprtion"
            className="border border-secondary rounded-lg px-3 py-1 h-32 w-64 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="lokasi" className="font-semibold">
            Lokasi
          </label>
          <LocationPicker onLocationSelect={handleLocationSelect} />
        </div>
        <button className="bg-secondary mx-auto items-center text-base w-full text-white rounded-lg py-2">
          Buat Laporan
        </button>
      </form>
    </div>
  );
}

export default LandingForm;
