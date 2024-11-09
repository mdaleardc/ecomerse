import React, {useRef, useEffect} from "react"


const UseRefHook = () => {
  
  let nameRef = useRef();
  
  useEffect(() => {
    nameRef.current.innerHTML = "Hello DevCode!";
    nameRef.current.style.color = "blue";
  })
  
  return (
    <div className="m-[0 auto]">
    <h1 className="text-black" ref={nameRef}>Use Ref Hook</h1>
    </div>
    )
}


export default UseRefHook;