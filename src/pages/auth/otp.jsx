import { Link } from "react-router";
import FormInput from "../../components/FormInput.jsx";
import ThemedButton from "../../components/ThemedButton.jsx";

export default function OTPPage() {
	return (
		<main className="flex flex-col w-full min-h-screen bg-primary">
			<h1 className="text-center py-9 text-neutral-secondary h1 px-9">
				Kami perlu konfirmasi
			</h1>
			<section className="flex-1 p-12 bg-white rounded-t-3xl">
				<h2 className="text-center text-black h5">Verifikasi Akun</h2>
				<p className="text-center text-black body-medium">
					Kami membutuhkan kode OTP dari Email anda sebelum memulai !
				</p>
				<div className="flex flex-row items-center justify-center space-x-5">
					<div className="w-full border border-grey" />
					<p className="text-grey">Atau</p>
					<div className="w-full border border-grey" />
				</div>
				<form className="flex flex-col mt-6 space-y-4">
					<FormInput
						label="Email"
						type="email"
						placeholder="example@domain.com"
					/>
					<FormInput
						label="Password"
						type="password"
						placeholder="Harus lebih dari 8 karakter"
					/>
					<div className="flex items-center justify-between">
						<form className="flex items-center space-x-2">
							<input type="checkbox" id="remember" />
							<label htmlFor="remember" className="text-grey">
								Ingat saya
							</label>
						</form>
						<Link to="/change-password" className="text-primary">
							Lupa Password?
						</Link>
					</div>
					<ThemedButton className="h-12">Daftar</ThemedButton>
					<div>
						<p className="text-center text-grey">
							Belum punya akun?{" "}
							<Link to="/register" className="text-primary">
								Daftar
							</Link>
						</p>
					</div>
				</form>
			</section>
		</main>
	);
}