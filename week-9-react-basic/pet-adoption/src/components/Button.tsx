type BottonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  varient?: "primary" | "secondary" ;
  className?: string;
};

const defaultStyles = "p-2 cursor-pointer rounded-lg";
const varientStyles = {
  "primary": "bg-primary text-white hover:bg-primary-dark",
  "secondary": "inset-ring-2 text-primary-black border-primary-black hover:bg-primary hover:border-white hover:text-white",
}



function Button({text, onClick, type="button", varient="primary", className}: BottonProps){
  return <button type={type} onClick={onClick} className={`${className} ${defaultStyles} ${varientStyles[varient]}`}>{text}</button>
}

export default Button;