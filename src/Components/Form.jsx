import React, {
  useState
} from "react"

const Form = () => {

  const [userData,
    setUserData] = useState({
      userName: "",
      email: "",
      number: "",
      createPass: "",
      confirmPass: "",

    });
  
  const [warn, setWarn] = useState({});
  const [flag, setFlag] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    
    setUserData({...userData, [e.target.name] : e.target.value});

  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const warnObj = {};
    
    if (userData.userName === "") {
      warnObj.userName = "Please enter the username!";
    }
    if (userData.email === "") {
      warnObj.email = "Please enter your email!";
    }
    if (userData.number === "") {
      warnObj.number = "Please enter phone number!";
    }
    if (userData.createPass === "") {
      warnObj.createPass = "Please enter a password!";
    }
    if (userData.confirmPass === "") {
      warnObj.confirmPass = "Please enter confirm password!";
    } else {
      setFlag(true);
    }
    
    setWarn(warnObj);
  }
  
  return (
    <div>
    <form className="form-section p-[1rem]  bg-[#123e] rounded-[1rem] my-[1rem] w-[95%] md:w-[50%]" onSubmit={handleSubmit}>
    <h1 className="text-1xl text-center text-[#FFFFFF]">{flag ? <p>{userData.userName} you have registered successfuly!</p> : ""}</h1>
      <fieldset className="my-[0] mx-[auto] block">
        <div className="text-3xl font-[bold] text-[#4ef] text-center">
Sign Up
    </div>
        <div className="my-[0] mx-[auto] flex flex-col gap-[0.5rem]">
      <input type="text" className="text-[#000] font-bold pl-[0.5rem] username" name="userName" placeholder="Username" autoComplete="off" value={userData.userName} onChange={handleChange} />
      <span className="text-[red]">{warn.userName}</span>
      <input type="text" className="text-[#000] font-bold pl-[0.5rem] email" name="email" placeholder="Email" autoComplete="off" value={userData.email} onChange={handleChange} />
      <span className="text-[red]">{warn.email}</span>
      <input type="text" className="text-[#000] font-bold pl-[0.5rem] number" name="number" placeholder="Phone number" autoComplete="off" value={userData.number} onChange={handleChange} />
      <span className="text-[red]">{warn.number}</span>
      <input type="password" className="text-[#000] font-bold pl-[0.5rem] creat-pass" name="createPass" placeholder="Create password" autoComplete="off" value={userData.createPass} onChange={handleChange} />
      <span className="text-[red]">{warn.createPass}</span>
      <input type="password" className="text-[#000] font-bold pl-[0.5rem] confirm-pass" name="confirmPass" placeholder="Confirm password" autoComplete="off" value={userData.confirmPass} onChange={handleChange} />
      <span className="text-[red]">{warn.confirmPass}</span>
    </div>
    </fieldset>
      <button type="submit" className="w-[5rem] rounded my-[0] mx-[auto] text-center block mt-[1rem] bg-[#00A4FF]">Sign Up</button>
    </form>
    </div>
  )
}

export default Form;