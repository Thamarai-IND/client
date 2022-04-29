import './App.css';
import React,{useEffect, useState} from 'react';
import axios from 'axios';
function App() {
  const [id,setId] = useState();
  const [productName,setProductName] = useState("");
  const [quantity,setQuantity] = useState();
  const [price,setPrice] = useState();
  const [salesData,setSalesData] = useState([]);
  const [updateData, setUpdateData] = useState("");
  const addToModel = () => {
    console.log(id,productName,price,quantity);
    axios.post("http://localhost:3001/insert",{id:id, productName:productName,quantity:quantity,price:price})
    .then((response) => console.log(response)).catch(err => console.log(err))
  }
  const updateSales = () => {

  }
  useEffect(() => {
    axios.get("http://localhost:3001/read").then(response => setSalesData(response.data));
  },[])
  console.log(salesData);
  
  return (
    <div className="App">
      
      
      <div className='container'>
        <h1>Insert Sales Information</h1>
        <label>id</label>
        <input type="text" onChange={(event)=>setId(event.target.value)} />
        <label style={{color:"palegreen"}}>product name</label>
        <input type="text" onChange={(event)=>setProductName(event.target.value)} />
        <label>quantity</label>
        <input type="text" onChange={(event)=>setQuantity(event.target.value)} />
        <label>price</label>
        <input type="text" onChange={(event)=>setPrice(event.target.value)} />
        <button className='button' type='button' color='primary' onClick={()=>addToModel()}>submit</button>
        <hr />
        <hr />
        <hr />
      </div>

      <div className='container-fluid'>
      {
        salesData.map((val) =>
          (
            <div className='d-flex '>
              <input 
            type="text"
            value={val.id}
            onChange={(event)=>setId(event.target.value)}
            />
            <input 
            type="text"
            value={val.productName}
            />
            <input 
            type="text"
            value={val.quantity}
            />
            <input 
            type="text"
            value={val.price}
            />
            <button type='button' onClick={()=> updateSales(val._id)}>update</button>
            <button>delete</button>
            </div>
          )
        )
      }
      </div>
      
    </div>
  );
}

export default App;
