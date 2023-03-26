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
       <h5 >Chain</h5>
   </div>
       <form onSubmit={handleSubmit}>
       
           <select className='select-crypto'  value={selectedOption} onChange={handleOptionChange}>
           
             <option className='option' value="Etherium"><img src ={Eth} alt="" ></img> Etherium</option>
             <option className='option' value="BSC "><img src ={Eth} alt="" ></img> BSC</option>
             <option className='option' value="Polygon"><img src ={Eth} alt="" ></img> Polygon</option>
             <option className='option' value="Optimism"><img src ={Eth} alt="" ></img> Optimism</option>
             <option className='option' value="Arbitrum"><img src ={Eth} alt="" ></img> Arbitrum</option>
             <option className='option' value="Avalanch"><img src ={Eth} alt="" ></img> Avalanche</option>
             <option className='option' value="Fantom"><img src ={Eth} alt="" ></img> Fantom</option>
             <option className='option' value="Celo"><img src ={Eth} alt="" ></img> Celo</option>
             <option className='option' value="Gnosis"><img src ={Eth} alt="" ></img> Gnosis</option>
             <option className='option' value="Glaytn"><img src ={Eth} alt="" ></img> Glaytn</option>
             <option className='option' value="Aurora"><img src ={Eth} alt="" ></img> Aurora</option>
             <option className='option' value="Heko"><img src ={Eth} alt="" ></img> Heko</option>
             <option className='option' value="Harmony "><img src ={Eth} alt="" ></img> Harmony</option>
             <option className='option' value="Boba"><img src ={Eth} alt="" ></img> Boba</option>
             <option className='option' value="OKX"><img src ={Eth} alt="" ></img> OKX</option>
             <option className='option' value="Cronos"><img src ={Eth} alt="" ></img> Cronos </option>
             <option className='option' value="Moonrive"><img src ={Eth} alt="" ></img> Moonriver        </option>
             <option className='option' value="Canto"><img src ={Eth} alt="" ></img> Canto </option>
             <option className='option' value="BitTorre"><img src ={Eth} alt="" ></img> BitTorrent     </option>
             <option className='option' value="Oasis"><img src ={Eth} alt="" ></img> Oasis</option>
             <option className='option' value="Velas"><img src ={Eth} alt="" ></img> Velas</option>
           </select>

           
       <div className='input-box'>
          <label className='label'>
          You Sell
          </label><br></br>
            <input className='number-input' type="number" value={number} onChange={handleNumberChange} />
            <select className='select-token'  value={selectedOption} onChange={handleOptionChange}>
            <option className='option' value="Etherium"><img src ={Eth} alt="" ></img> Etherium</option>
             <option className='option' value="BSC "><img src ={Eth} alt="" ></img> BSC</option>
             <option className='option' value="Polygon"><img src ={Eth} alt="" ></img> Polygon</option>
             <option className='option' value="Optimism"><img src ={Eth} alt="" ></img> Optimism</option>
             <option className='option' value="Arbitrum"><img src ={Eth} alt="" ></img> Arbitrum</option>
             <option className='option' value="Avalanch"><img src ={Eth} alt="" ></img> Avalanche</option>
             <option className='option' value="Fantom"><img src ={Eth} alt="" ></img> Fantom</option>
             <option className='option' value="Celo"><img src ={Eth} alt="" ></img> Celo</option>
             <option className='option' value="Gnosis"><img src ={Eth} alt="" ></img> Gnosis</option>
             <option className='option' value="Glaytn"><img src ={Eth} alt="" ></img> Glaytn</option>
             <option className='option' value="Aurora"><img src ={Eth} alt="" ></img> Aurora</option>
             <option className='option' value="Heko"><img src ={Eth} alt="" ></img> Heko</option>
             <option className='option' value="Harmony "><img src ={Eth} alt="" ></img> Harmony</option>
             <option className='option' value="Boba"><img src ={Eth} alt="" ></img> Boba</option>
             <option className='option' value="OKX"><img src ={Eth} alt="" ></img> OKX</option>
             <option className='option' value="Cronos"><img src ={Eth} alt="" ></img> Cronos </option>
             <option className='option' value="Moonrive"><img src ={Eth} alt="" ></img> Moonriver        </option>
             <option className='option' value="Canto"><img src ={Eth} alt="" ></img> Canto </option>
             <option className='option' value="BitTorre"><img src ={Eth} alt="" ></img> BitTorrent     </option>
             <option className='option' value="Oasis"><img src ={Eth} alt="" ></img> Oasis</option>
             <option className='option' value="Velas"><img src ={Eth} alt="" ></img> Velas</option>
         </select>
       </div>
     
         <button className='calculate-button' type="submit">Calculate</button>
       </form>
       <button className='connect-wallet-button-long'>Connect Wallet</button>
     </div>

  );
}

export default LeftBox;
