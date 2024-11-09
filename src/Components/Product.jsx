import {
  React,
  useState,
  useEffect,
  useRef
} from "react"
import Data from "../Data/Data"


const Product = () => {
  const [item, setItem] = useState(Data);
  
  const handleFilter = () => {
    
  const filteredItem = item.filter((fItem) => {
        return fItem.price < 20;
      })
     setItem(filteredItem)
  }

  
  
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setItem(data))
  }, [])
  
  
  return (
    <>
      <div className="mt-[80px]" onClick={handleFilter}><h1 className="bg-[#0E1573] rounded-[5px] text-[1.5rem] w-[fit-content] p-[4px] text-white">Filter Products</h1></div>
      
      <div className="Products-container bg-[#ffff] grid grid-cols-1 md:grid-cols-2 gap-x-[10px] gap-y-[15px]">
        
       {
       item.map((elem, index) => {
        return (
          
          <div className="item-card border-2 border-[inharit] border-solid rounded-md shadow-xl bg-[#000445] text-white">
          
          <div className="item-img w-full h-[260px]">
            <img src={elem.image} alt={elem.alt} className="rounded-sm w-full h-[90%] object-cover"/>
            </div>
            
          <div className="item-name text-center">{elem.category}</div>
          
          <div className="price text-center text-bold bg-[#17B2ff] w-[fit-content] ml-[auto] mr-[auto] p-[5px] rounded-md">{elem.price} BDT</div>
          <div className="price text-center text-bold bg-[#17B2ff] w-[fit-content] ml-[auto] mr-[auto] p-[5px] rounded-md">{elem.id}</div>
      </div>
      )
      })
       }
       
      </div>
    </>
    )
  
}

export default Product