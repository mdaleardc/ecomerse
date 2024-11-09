import React, { useState } from "react"

const Form = () => {
  
  const [firstName, setFirstName] = useState("Dev");
  const [lastName, setLastName] = useState("Code");
  const [number, setNumber] = useState(0);
  const [newPass, setNewPass] = useState("password");
  const [passAgain, setPassAgain] = useState("password");
  
  const handleChange = (e) => {
    e.preventDefault();
    const targetName = e.target.name;
    const targetVal = e.target.value;
    if(targetName === "f-name") {
      setFirstName(targetVal)
    } else if(targetName === "l-name") {
      setLastName(targetVal);
    } else if(targetName === "number") {
      setNumber(targetVal);
    } else if(targetName === "new-pass") {
      setNewPass(targetVal);
    } else if(targetName === "match-pass") {
      setPassAgain(targetVal);
    }
  }
  
  return (
    <div>
    <form action="" className="form-section p-[1rem]  bg-[#123] rounded m-y-[1rem]">
      
      <fieldset className="border-[3px] border-solid border-[#2ef]">
        <legend className="text-3xl font-[bold] text-[#4ef] mx-[auto] my-[0]">Sign Up</legend>
          
        <div className="grid grid-rows gap-x-[2rem] gap-y-[0.5rem] md:grid-cols-2 md:w-[100%] justify-center content-center">
      <label for="f-name">First Name: </label>
      <input type="text" id="f-name" name="f-name" value={firstName} onChange={handleChange}/>
      <label for="l-name">Last Name: </label>
      <input type="text" id="l-name" name="l-name" value={lastName} onChange={handleChange}/>
      <label for="number">Number: </label>
      <input type="number" id="number" name="number" value={number} onChange={handleChange}/>
      <label for="new-pass">New Password: </label>
      <input type="password" id="new-pass" name="new-pass" value={newPass} onChange={handleChange}/>
      <label for="match-pass">Password Again: </label>
      <input type="password" id="match-pass" name="match-pass" value={passAgain} onChange={handleChange}/>
        </div>
      </fieldset>
      <input type="submit" className="w-[5rem] rounded my-[0] mx-[auto] text-center block mt-[2rem] bg-[#00A4FF]"/>
    </form>
    </div>
    )
}

export default Form;