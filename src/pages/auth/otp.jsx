import { useCallback, useRef, useState } from "react";
import { useNavigate } from "react-router";
import ThemedButton from "../../components/ThemedButton.jsx";

export default function OTPPage() {
	const [otp, setOtp] = useState(["", "", "", ""]);
	const inputs = useRef([]);
	const navigate = useNavigate();
	const setRef = useCallback(
		(index) => (element) => {
			inputs.current[index] = element;
		},
		[],
	);

	const handleChange = (element, index) => {
		if (Number.isNaN(element.value)) {
			return false;
		}

		setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

		// Focus next input
		if (element.value !== "" && index < 3) {
			inputs.current[index + 1].focus();
		}
	};

	const handleBackspace = (e, index) => {
		// Focus previous input on backspace
		if (e.key === "Backspace" && index > 0 && otp[index] === "") {
			inputs.current[index - 1].focus();
		}
	};

	return (
		<main className="flex flex-col w-full h-screen bg-primary">
			<h1 className="flex items-center justify-center flex-1 text-center py-9 text-neutral-secondary h1">
				Kami perlu konfirmasi
			</h1>
			<section className="flex-1 p-12 bg-white rounded-t-3xl">
				<h2 className="text-center text-black h5">Verifikasi Akun</h2>
				<p className="pt-6 pb-8 text-center text-black body-medium">
					Kami membutuhkan kode OTP dari Email anda sebelum memulai !
				</p>
				<div className="flex flex-col gap-4">
					<label className="text-black body-medium">Kode OTP</label>
					<div className="flex justify-between gap-4">
						{otp.map((digit, index) => (
							<input
								key={index}
								type="text"
								maxLength="1"
								ref={setRef(index)}
								value={digit}
								onChange={(e) => handleChange(e.target, index)}
								onKeyDown={(e) => handleBackspace(e, index)}
								className="w-16 h-12 text-lg font-semibold text-center border rounded-lg border-neutral-300 focus:border-primary focus:outline-none"
							/>
						))}
					</div>
				</div>
				<div className="mt-8">
					<ThemedButton
						className="w-full h-12"
						onClick={() => navigate("/activity")}
					>
						Konfirmasi
					</ThemedButton>
				</div>
			</section>
		</main>
	);
}
