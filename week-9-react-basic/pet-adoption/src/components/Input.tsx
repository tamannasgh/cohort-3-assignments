type InputProps = {
  type: string;
  placeholder: string;
  label: string;
  options: string[];
  error: string;
}

const inputStyles = "bg-white p-2 rounded-lg w-60";
const divStyles = "flex flex-col md:flex-row justify-between md:items-center gap-2 md:gap-10 mb-2";

function Input({type="text", placeholder, label, options, error}: Partial<InputProps>){
  const inputName = label?.split(" ").join("-").toLowerCase();
  return <div className={divStyles}>
    <label htmlFor={inputName} className={"text-primary-black"}>{label}</label>
    { type !== "select" ? <div><input required name={inputName} placeholder={placeholder} type={type} id={inputName} className={inputStyles}/> {error && <p className="text-primary-black text-sm max-w-60">{error}</p>}</div> : 
      <select required name={inputName} id={inputName} className={inputStyles}>
        <option value="" className="text-gray-400">{placeholder}</option>
        {options && options.map((option, i)=> <option value={option} key={`${option + i}`}>{option}</option>)}
      </select>
    }
    
  </div>
}

export default Input;
