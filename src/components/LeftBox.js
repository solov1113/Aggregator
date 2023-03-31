import React, { useState } from 'react';
import './style.css'
import Eth from '../images/Ethereum.svg.png'





function LeftBox({ onSubmit }) {
  const [number, setNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleNumberChange = (event) => {
    setNumber(parseInt(event.target.value));
  }

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(number, selectedOption);
  }

  return (

     <div className="leftbox">
   <div style={{ textAlign:"left" ,margin:"20px"}}>
       <h5 >Asset Pair</h5>
   </div>
       <form onSubmit={handleSubmit}>
       
           <select className='select-crypto'  value={selectedOption} onChange={handleOptionChange}>
           
             <option className='option' value="Etherium"><img src ={Eth} alt="" ></img>BTC/USD</option>
             <option className='option' value="BSC "><img src ={Eth} alt="" ></img>ETH/USD</option>
             <option className='option' value="Polygon"><img src ={Eth} alt="" ></img>LINK/USD</option>
             <option className='option' value="Optimism"><img src ={Eth} alt="" ></img>UNI/USD</option>
           </select>

           
       <div className='input-box'>
          <label className='label'>
          Collateral
          </label><br></br>
            <input className='number-input' type="number" value={number} onChange={handleNumberChange} />
            <select className='select-token'  value={selectedOption} onChange={handleOptionChange}>
            <option className='option' value="Etherium"><img src ={Eth} alt="" ></img>Long</option>
             <option className='option' value="BSC "><img src ={Eth} alt="" ></img>Short</option>
         </select>
       </div>
     
         <button className='calculate-button' type="submit">Calculate</button>
       </form>
       <button className='connect-wallet-button-long'>Connect Wallet</button>
     </div>

  );
}

export default LeftBox;
