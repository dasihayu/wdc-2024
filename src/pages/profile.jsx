// ProfilePage.jsx
import { useState } from "react";
import { useNavigate } from "react-router";
import Back from "../components/Back.jsx";
import { FormInput, FormSelect } from "../components/FormProfile.jsx";

export default function ProfilePage() {
	const [formData, setFormData] = useState({
		fullName: "",
		username: "",
		occupation: "",
		birthDate: "",
		gender: "",
		email: "",
		phone: "",
		province: "Jawa Tengah",
		city: "Kota Semarang",
		district: "Pedurungan",
		instagramUsername: "admin_123",
	});
	const navigate = useNavigate();

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const genderOptions = [
		{ value: "male", label: "Laki-laki" },
		{ value: "female", label: "Perempuan" },
	];

	return (
		<main className="flex flex-col min-h-screen bg-primary">
			<div className="p-4">
				<Back name="Aktivitas" onClick={() => navigate("/activity")} />
			</div>

			<div className="flex-1 px-6 py-8 bg-white rounded-t-3xl">
				<div className="flex justify-center mb-6">
					<div className="flex items-center justify-center w-24 h-24 bg-gray-200 rounded-full">
						<svg
							className="w-12 h-12 text-gray-400"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
						</svg>
					</div>
				</div>

				<form className="flex flex-col gap-4">
					<FormInput
						label="Nama Lengkap"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
						required={true}
					/>

					<FormInput
						label="Username"
						name="username"
						value={formData.username}
						onChange={handleChange}
						required={true}
					/>

					<FormInput
						label="Pekerjaan"
						name="occupation"
						value={formData.occupation}
						onChange={handleChange}
					/>

					<FormInput
						label="Tanggal Lahir"
						name="birthDate"
						type="date"
						value={formData.birthDate}
						onChange={handleChange}
					/>

					<FormSelect
						label="Jenis Kelamin"
						name="gender"
						value={formData.gender}
						onChange={handleChange}
						options={genderOptions}
						placeholder="Pilih Jenis Kelamin"
					/>

					<FormInput
						label="Email"
						name="email"
						type="email"
						value={formData.email}
						onChange={handleChange}
						required={true}
					/>

					<FormInput
						label="No Telpon"
						name="phone"
						type="tel"
						value={formData.phone}
						onChange={handleChange}
						required={true}
					/>

					<FormInput
						label="Provinsi"
						name="province"
						value={formData.province}
						onChange={handleChange}
						disabled={true}
					/>

					<FormInput
						label="Kota/Kabupaten"
						name="city"
						value={formData.city}
						onChange={handleChange}
						disabled={true}
					/>

					<FormInput
						label="Kecamatan"
						name="district"
						value={formData.district}
						onChange={handleChange}
						disabled={true}
					/>

					<FormInput
						label="Username Instagram"
						name="instagramUsername"
						value={formData.instagramUsername}
						onChange={handleChange}
						disabled={true}
					/>

					<button
						type="submit"
						className="h-12 mt-4 text-white transition-colors rounded-lg bg-primary hover:bg-primary-dark"
					>
						Simpan
					</button>
				</form>
			</div>
		</main>
	);
}
