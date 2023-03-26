import React from 'react'
import {MdOutlineLocalGasStation} from 'react-icons/md';


const Data = () => {
  return (
    <div className='main-data-container'>
     <div className='data-container-headline'>
<h5>Select a route to perform a swap</h5>
<p style={{ color:"gray" }}>Best route is selected based on net output after gas fees.</p>
     </div>



<div className='info'>
    <div className='data-piece-left'>
        <p>1.9971DAI</p>
    </div>
    <div  className='data-piece-right'>
        <p style={{ color:"greenYellow" }}>Best</p>
    </div>
   <div  className='data-piece-left'>
     <p>≈ $-0.7 after fees</p>
   </div>
    <div  className='data-piece-right'>
    <p> <MdOutlineLocalGasStation /> $5.0728via KyberSwap</p>
    </div>
</div>


<div className='info'>
    <div className='data-piece-left'>
        <p>1.9971DAI</p>
    </div>
    <div  className='data-piece-right'>
        <p style={{ color:"red" }}>-321.67%</p>
    </div>
   <div  className='data-piece-left'>
     <p>≈ $-0.7 after fees</p>
   </div>
    <div  className='data-piece-right'>
        <p><MdOutlineLocalGasStation /> $5.0728via KyberSwap</p>
    </div>
</div>

<div className='info'>
    <div className='data-piece-left'>
        <p>1.9971DAI</p>
    </div>
    <div  className='data-piece-right'>
        <p style={{ color:"red" }}>-321.67%</p>
    </div>
   <div  className='data-piece-left'>
     <p>≈ $-0.7 after fees</p>
   </div>
    <div  className='data-piece-right'>
        <p><MdOutlineLocalGasStation /> $5.0728via KyberSwap</p>
    </div>
</div>

<div className='info'>
    <div className='data-piece-left'>
        <p>1.9971DAI</p>
    </div>
    <div  className='data-piece-right'>
        <p style={{ color:"red" }}>-321.67%</p>
    </div>
   <div  className='data-piece-left'>
     <p>≈ $-0.7 after fees</p>
   </div>
    <div  className='data-piece-right'>
        <p><MdOutlineLocalGasStation /> $5.0728via KyberSwap</p>
    </div>
</div>

<div className='info'>
    <div className='data-piece-left'>
        <p>1.9971DAI</p>
    </div>
    <div  className='data-piece-right'>
        <p style={{ color:"red" }}>-321.67%</p>
    </div>
   <div  className='data-piece-left'>
     <p>≈ $-0.7 after fees</p>
   </div>
    <div  className='data-piece-right'>
        <p><MdOutlineLocalGasStation /> $5.0728via KyberSwap</p>
    </div>
</div>

    </div>
  )
}

export default Data
