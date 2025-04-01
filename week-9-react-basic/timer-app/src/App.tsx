import {useRef, useState, useEffect} from "react";
import Timer from "./Timer"

function App() {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(10);
  const minRef = useRef<HTMLInputElement>(null);
  const secRef = useRef<HTMLInputElement>(null);

  function handleNewTime(){
    if(!minRef.current || !secRef.current) return;

    //if input left empty it will be 0 as converting empty string to number, well good for us
    const newMin = Number(minRef.current.value);
    const newSec = Number(secRef.current.value);


    if(newMin < 0 || newSec < 0){
      alert("Time should be positive");
      return;
    }
    if(newSec > 60){
      alert("Seconds could maximize to 60");
      return;
    }
    if(newMin > 60){
      alert("Minutes could maximize to 60");
      return;
    }

    setMin(newMin);
    setSec(newSec);
    minRef.current.value = "";
    secRef.current.value = "";
  }

  //just to check if the values are updating
  useEffect(() => {
    console.log(min, sec);
  }, [min, sec])

  return (<div className="h-screen w-full flex flex-col items-center justify-center">
    <Timer min={min} sec={sec}/>
    <div className="flex flex-col items-center space-y-3 border border-gray-400 p-5 rounded-lg mt-5">
      <input ref={minRef} placeholder="enter new min" type="number" className="border border-gray-300 p-2 rounded-lg"/>
      <input ref={secRef} placeholder="enter new sec" type="number" className="border border-gray-300 p-2 rounded-lg"/>
      <button onClick={handleNewTime} className="bg-blue-400 text-white py-1 px-4 rounded-lg cursor-pointer hover:bg-blue-500">Update Timer</button>
    </div>
  </div>)
}

export default App
