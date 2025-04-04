import {FormEvent, useRef} from "react";
import Button from "./Button";
import Input from "./Input";


function AdoptionForm(){

  const FormRef = useRef(null);

  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    console.log(e.target);
    
    const formDataIterable = new FormData(FormRef.current!).entries();
    const formData = Object.fromEntries(formDataIterable);
    console.log(formData);
  }

  return <div className="bg-glass p-5 rounded-lg mt-5">
    <h1 className="text-2xl text-primary text-center">Adoption Form</h1>
    <form onSubmit={handleSubmit} ref={FormRef} className="grid grid-cols-1 gap-2 md:p-5 mt-3">
      <Input label="Pet Name" type="text" placeholder="Pet Name" />
      <Input label="Pet Type" type="select" placeholder="Select Pet Type" options={["Cat", "Dog"]} />
      <Input label="Breed" type="select" placeholder="Select Breed" options={["breed1", "breed2"]}/>
      <Input label="Your Name" type="text" placeholder="Your Name" />
      <Input label="Email" type="email" placeholder="Email" />
      <Input label="Phone" type="phone" placeholder="Phone" />
      <div className="flex justify-between items-center gap-4 ">
      <Button text="Reset" type="reset" className="grow"varient="secondary"/>
      <Button text="Submit" type="submit" className="grow"/>
      </div>
      
    </form>

  </div>;
}

export default AdoptionForm;
