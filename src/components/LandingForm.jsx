import React, { useState } from "react";
import { useNavigate } from "react-router";
import LocationPicker from "./LocationPicker";

function LandingForm() {
	const [fileName, setFileName] = useState("Tidak ada file yang dipilih");
	const [location, setLocation] = useState(null);
	const navigate = useNavigate();

	const handleLocationSelect = (coords) => {
		setLocation(coords);
	};

	return (
		<div className="w-full max-w-2xl mx-auto">
			<form className="flex flex-col items-center justify-center gap-6 p-6 rounded-lg shadow-md md:p-8">
				<div className="flex flex-col w-full max-w-md gap-2">
					<label htmlFor="name" className="font-semibold">
						Nama
					</label>
					<input
						type="text"
						placeholder="Nama lengkap"
						name="name"
						className="w-full px-4 py-2 transition-all border rounded-lg border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50"
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
						className="w-full px-4 py-2 transition-all border rounded-lg border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50"
					/>
				</div>

				<div className="flex flex-col w-full max-w-md gap-2">
					<label htmlFor="fileInput" className="font-semibold">
						Unggah Foto
					</label>
					<div className="relative w-full">
						<button
							type="button"
							className="flex items-center w-full gap-3 px-4 py-2 text-left text-gray-500 transition-all border rounded-lg border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50"
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
									e.target.files[0]?.name || "Tidak ada file yang dipilih",
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
						className="w-full h-32 px-4 py-2 transition-all border rounded-lg resize-none border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/50"
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

				<button
					className="w-full max-w-md py-3 text-base font-medium text-white transition-colors rounded-lg bg-secondary hover:bg-secondary/90"
					onClick={() => navigate("/thank-you")}
				>
					Buat Laporan
				</button>
			</form>
		</div>
	);
}

export default LandingForm;
