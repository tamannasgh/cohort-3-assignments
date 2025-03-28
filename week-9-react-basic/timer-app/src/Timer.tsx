import { useEffect, useState } from "react";

function Timer() {
	const [totalSeconds, setTotalSeconds] = useState(10 + 0 * 60);
	const [isRunning, setIsRunning] = useState(false);

	const min = Math.floor(totalSeconds / 60);
	const sec = totalSeconds % 60;

	useEffect(() => {
		if (!isRunning) return;
		const timer = setInterval(() => {
			console.log("interval is running");

			setTotalSeconds((totalSeconds) => {
				if (totalSeconds === 0) {
					clearInterval(timer);
					return 0;
				}
				return totalSeconds - 1;
			});
		}, 1000);
		return () => {
			console.log("clearing interval");
			clearInterval(timer);
		};
	}, [isRunning]);

	return (
		<div className="text-5xl">
			{isFineTimeUnit(min) ? min : `0${min}`} :{" "}
			{isFineTimeUnit(sec) ? sec : `0${sec}`}
			<div className="text-3xl flex justify-center items-center p-5 space-x-3">
				{totalSeconds > 0 ? (
					<button
						className="bg-blue-400 text-white py-1 px-4 rounded-lg cursor-pointer hover:bg-blue-500"
						onClick={() => setIsRunning(!isRunning)}
					>
						{isRunning ? "Pause" : "Start"}
					</button>
				) : (
					<h1>Done!</h1>
				)}
			</div>
		</div>
	);
}

function isFineTimeUnit(timeUnit: number) {
	return timeUnit.toString().length === 2;
}

export default Timer;
