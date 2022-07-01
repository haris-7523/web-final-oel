import './App.css';
import React, {useEffect} from "react"
import Axios  from 'axios';
import Form from './components/Form/Form';

function App() {

  const [carList,setCarList]=React.useState([]);
  const [newCarName,setNewCarName]= React.useState("");
  
  useEffect(()=>{
    Axios.get("http://localhost:3001/read").then(response =>{
      setCarList(response.data);
    })
  })

  const update_c=(id)=>{
    Axios.put("http://localhost:3001/update",{id:id,newCarName:newCarName})
  }

  const delete_c=(id)=>{
    Axios.delete(`http://localhost:3001/delete/${id}`)
  }
  return (
      <div className='App'>
        <Form />
        <hr/>
        {
          carList.map((val, key)=>{
            return <div key={key}> 
              <h1>{val.carName}</h1>
              <h1>{val.carModel}</h1>
              <input type="text" placeholder='Enter Name to Update or Remove Car'  onChange={(event)=>{
          setNewCarName(event.target.value);
        }} />
        <br></br>
              <button className="btn btnUpdate" onClick={()=>update_c(val._id)}>Update</button>
              <button className="btn btnRemove" onClick={()=>delete_c(val._id)}>Remove</button>
            </div>
          })
        }
        </div>
    );
}

export default App;
