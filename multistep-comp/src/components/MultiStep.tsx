import { useState } from "react";

type MultiStepProps = {
	children: React.ReactNode[];
};

function MultiStep({ children }: MultiStepProps) {
	const [step, setStep] = useState(0);
	const totalsteps = children.length;
	return (
		<div className="border rounded-lg p-10 w-1/2 bg-white shadow-lg flex flex-col gap-10">
			<h1 className="self-end">
				{step + 1}/{totalsteps}
			</h1>
			{children[step]}
			<div className="flex justify-between items-center">
				<button
						onClick={() => {
							setStep(step - 1);
						}}
            className={`bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer ${step > 0 ? "" : "invisible"}`}
					>
						Prev
					</button>
				<button
						onClick={() => {
							setStep(step + 1);
						}}
            className={`bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer ${step < totalsteps - 1 ? "" : "invisible"}`}
					>
						Next
					</button>
			</div>
		</div>
	);
}

export default MultiStep;
