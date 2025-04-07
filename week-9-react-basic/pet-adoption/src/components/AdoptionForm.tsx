import {FormEvent, useRef, useState} from "react";
import Button from "./Button";
import Input from "./Input";


function AdoptionForm(){

  const FormRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});


  function handleSubmit(e: FormEvent<HTMLFormElement>){
    e.preventDefault();
    
    const formDataIterable = new FormData(FormRef.current!).entries();
    const formData = Object.fromEntries(formDataIterable);
    console.log(formData);

    const newErrors: Record<string, string> = {};
    //name and email validations are already there, just added required and used type email, also select are also required, so we need to add validation only for phone no.
    if( (formData["phone"] as string).length < 10 || (formData["phone"] as string).length > 10 || !/^\d+$/.test(formData["phone"] as string) ){
      newErrors["phone"] = "Phone number must be 10 digits and contain only numbers";
    }
    
    //object.keys se hume basically array mil jaega to isse hoga kya ki length pta chl jaegi na ki koi bhi error h ya nhi
    if(Object.keys(newErrors).length > 0){
      setErrors(newErrors);
      console.log(newErrors);
      return;
    }

    console.log("Form submitted successfully", formData);
    setErrors({});
    // Reset the form after successful submission
    FormRef.current?.reset();

  }

  return <div className="bg-glass p-5 rounded-lg mt-5">
    <h1 className="text-2xl text-primary text-center">Adoption Form</h1>
    <form onSubmit={handleSubmit} ref={FormRef} className="grid grid-cols-1 gap-2 md:p-5 mt-3">
      <Input label="Pet Name" type="text" placeholder="Pet Name" />
      <Input label="Pet Type" type="select" placeholder="Select Pet Type" options={["Cat", "Dog"]} />
      <Input label="Breed" type="select" placeholder="Select Breed" options={["breed1", "breed2"]}/>
      <Input label="Your Name" type="text" placeholder="Your Name" />
      <Input label="Email" type="email" placeholder="Email" />
      <Input label="Phone" type="phone" placeholder="Phone" error={errors["phone"]}/>
      <div className="flex justify-between items-center gap-4 ">
      <Button text="Reset" type="reset" className="grow"varient="secondary"/>
      <Button text="Submit" type="submit" className="grow"/>
      </div>
      
    </form>

  </div>;
}

export default AdoptionForm;
