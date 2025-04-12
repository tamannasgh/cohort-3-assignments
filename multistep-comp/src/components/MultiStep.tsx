import { useState } from "react";

type MultiStepProps = {
	children: React.ReactNode[];
  onComplete?: () => void;
};

function MultiStep({ children, onComplete }: MultiStepProps) {
	const [step, setStep] = useState(0);
	const totalsteps = children.length;
	return (
		<div className="border rounded-lg p-10 w-full max-w-xl m-auto bg-white shadow-lg flex flex-col gap-10">
			<h1 className="self-end">
				{step + 1}/{totalsteps}
			</h1>
			{children[step]}
			<div className="flex justify-between items-center">
				<button
						onClick={() => {
              if (step > 0) {
							setStep(step - 1);
              }
						}}
            className={`bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer ${step > 0 ? "" : "invisible"}`}
					>
						Prev
					</button>
				<button
						onClick={() => {
              if(step < totalsteps - 1) {
							setStep(step + 1);
              }
              if(step === totalsteps - 1) {
                if(typeof onComplete === "function") {
                  onComplete();
                } else{
                  alert("Completed!");
                }
                setStep(0);
              }
						}}
            className={`bg-purple-600 text-white px-4 py-2 rounded-lg cursor-pointer`}
					>
						{step < totalsteps - 1 ? "Next" : "Finish"}
					</button>
			</div>
		</div>
	);
}

export default MultiStep;
