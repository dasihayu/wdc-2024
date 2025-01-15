import FormInput from "../../components/FormInput.jsx";
import ThemedButton from "../../components/ThemedButton.jsx";

export default function RegisterPage() {
	return (
		<main className="flex flex-col w-full min-h-screen bg-primary">
			<h1 className="text-center py-9 text-neutral-secondary h1 px-9">
				Selamat datang Pasukan Kebersihan
			</h1>
			<section className="flex-1 p-12 bg-white rounded-t-3xl">
				<ThemedButton src="/google.png" alt="Google Icon" type="secondary">
					Daftar dengan Google
				</ThemedButton>
				<ThemedButton
					src="/Facebook.png"
					alt="Google Icon"
					className="mt-3 mb-6"
					type="secondary"
				>
					Daftar dengan Facebook
				</ThemedButton>
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
						<a href="/src/pages/auth/change-password">Lupa Password?</a>
					</div>
					<ThemedButton className="h-12">Daftar</ThemedButton>
					<div>
						<p className="text-center text-grey">
							Sudah punya akun?{" "}
							<a href="/src/pages/auth/login" className="text-primary">
								Masuk
							</a>
						</p>
					</div>
				</form>
			</section>
		</main>
	);
}
