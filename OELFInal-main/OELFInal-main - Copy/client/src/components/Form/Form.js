
import React, {useEffect} from "react"
import Axios  from 'axios';
const Form = () => {

    const [carName,setCarName]= React.useState("");
    const [carModel,setModel]=React.useState(0);


    const add_c=()=>{
      
      Axios.post('http://localhost:3001/insert',{carName:carName,carModel:carModel})
    }
  return (
    <div>
        
        
        <h1>Car Management System </h1>
        <label >Car Name : </label>
        <input  type="text" placeholder='Enter Car Name' onChange={(event)=>{
          setCarName(event.target.value);
        }} />
        
    
        <label> Car Model : </label>
        <input type="number" placeholder='Enter Car Model' onChange={(event)=>{
          setModel(event.target.value);
        }}  />
        <br></br>
        <button className="btn btnAdd"  onClick={add_c}>ADD</button>
    </div>
  )
}

export default Form;