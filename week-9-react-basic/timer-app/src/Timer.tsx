import { useEffect, useState } from "react";

function Timer({min, sec}: {min: number, sec: number}) {
	const [totalSeconds, setTotalSeconds] = useState(sec + (min * 60));
	const [isRunning, setIsRunning] = useState(false);

	const localMin = Math.floor(totalSeconds / 60);
	const localSec = totalSeconds % 60;
  
	//this will run if min and sec updated (by inputs from app.tsx)
	useEffect(() => {
		setTotalSeconds(sec + (min * 60));
	}, [min, sec]);

	useEffect(() => {
		if (!isRunning) return;
		const timer = setInterval(() => {
			console.log("interval is running");

			setTotalSeconds((prevTotalSeconds) => {
				if (prevTotalSeconds === 0) {
					clearInterval(timer);
					setIsRunning(false);
					return 0;
				}
				return prevTotalSeconds - 1;
			});
		}, 1000);
		return () => {
			console.log("clearing interval");
			clearInterval(timer);
		};
	}, [isRunning]);

	return (
		<div className="text-5xl flex flex-col items-center ">
			<h1>{isFineTimeUnit(localMin) ? localMin : `0${localMin}`} :  
			{isFineTimeUnit(localSec) ? localSec : `0${localSec}`}</h1>
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
				<button onClick={()=>setTotalSeconds(sec + (min * 60))} className="bg-blue-400 text-white py-1 px-4 rounded-lg cursor-pointer hover:bg-blue-500">Reset</button>
			</div>
		</div>
	);
}

function isFineTimeUnit(timeUnit: number) {
	return timeUnit.toString().length === 2;
}

export default Timer;
