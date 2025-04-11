import { useState, useRef, useEffect } from "react";

function App() {
	const otpDigitCount = 6;
	const [inputArr, setInputArr] = useState(Array(otpDigitCount).fill(""));
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	useEffect(() => {
		inputRefs.current[0]?.focus();
	}, []);

	function goBack(index: number) {
		inputRefs.current[index - 1]?.focus();
	}

	function goForw(index: number) {
		inputRefs.current[index + 1]?.focus();
	}

	function handleOnChange(
		e: React.ChangeEvent<HTMLInputElement>,
		index: number
	) {
		//isse kya hoa ki spaces ht jaenge or jo bhi end mei type kiya hoga wo aaega
		//slice ki (-) mei value dene se wo peeche se return krega
		const value = e.target.value.trim().slice(-1);
		if (Number.isNaN(Number(value))) {
			return;
		}

		const newArr = [...inputArr];
		newArr[index] = value;
		setInputArr(newArr);

		if (value) {
			goForw(index);
		}
	}

	function handleKeyDown(
		e: React.KeyboardEvent<HTMLInputElement>,
		index: number
	) {
		if (e.key === "Backspace" && !inputArr[index]) {
			e.preventDefault();
			goBack(index);
		}

		if (e.key === "ArrowLeft") {
			e.preventDefault();
			goBack(index);
		}
		if (e.key === "ArrowRight") {
			e.preventDefault();
			goForw(index);
		}
	}

	const isOtpNotFilled = !inputArr.every((value) => value !== "");

	return (
		<div className="min-h-screen flex flex-col justify-center items-center gap-10 w-full">
			<h1 className="text-3xl text-center">Otp input</h1>
			<div className="flex gap-2 w-full justify-center">
				{inputArr.map((value, index) => {
					return (
						<input
							key={index}
							value={value}
							ref={(ref) => {
								if (ref) inputRefs.current[index] = ref;
							}}
							className="border w-14 h-14 text-3xl text-center rounded-md"
							onChange={(e) => {
								handleOnChange(e, index);
							}}
							onKeyDown={(e) => handleKeyDown(e, index)}
						/>
					);
				})}
			</div>
			<button
				disabled={isOtpNotFilled}
				onClick={() => {
					alert("otp filled : " + inputArr.toString());
					setInputArr(Array(otpDigitCount).fill(""));
				}}
				className="cursor-pointer py-2 px-4 bg-blue-400 text-white rounded-lg text-2xl disabled:cursor-not-allowed disabled:bg-gray-500"
			>
				Submit
			</button>
		</div>
	);
}

export default App;
