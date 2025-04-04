type InputProps = {
  type: string;
  placeholder: string;
  label: string;
  options: string[];
}

const inputStyles = "bg-white p-2 rounded-lg w-60";
const divStyles = "flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-10 mb-2";

function Input({type="text", placeholder, label, options}: Partial<InputProps>){
  const inputName = label?.split(" ").join("-").toLowerCase();
  return <div className={divStyles}>
    <label htmlFor={inputName} className={"text-primary-black"}>{label}</label>
    { type !== "select" ? <input name={inputName} placeholder={placeholder} type={type} id={inputName} className={inputStyles}/> : 
      <select name={inputName} id={inputName} className={inputStyles}>
        <option value="" className="text-gray-400">{placeholder}</option>
        {options && options.map((option, i)=> <option value={option} key={`${option + i}`}>{option}</option>)}
      </select>
    }
    
  </div>
}

export default Input;
