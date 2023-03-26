import React from 'react'
import {SiBlockchaindotcom} from 'react-icons/si'
import {SiHiveBlockchain} from 'react-icons/si'
import {TiTick} from 'react-icons/ti'

import mainIcon from '../images/blockchain.png'
const InitialText = () => {
    return ( 
        <div className='initial-text '>
        <div className='scrolling-icons'>
            <img className='main-icon' src={mainIcon} alt=""></img>
<SiBlockchaindotcom className="icon" />
<SiHiveBlockchain className="icon" />
<SiBlockchaindotcom className="icon" />
<SiHiveBlockchain className="icon" />
<SiBlockchaindotcom className="icon" />
<SiHiveBlockchain className="icon" />
<SiBlockchaindotcom className="icon" />
<SiHiveBlockchain className="icon" />
<SiBlockchaindotcom className="icon" />

        </div>
        <h4>The aggrigator of the aggrigater</h4>
        <div className='features'>
<p><TiTick />  totally free</p>
<p><TiTick />easy to use</p>
<p><TiTick /> better privacy</p>
        </div>
 <div>
    <p style={{ margin:"0 20px", textAlign:"justify" }}>id sit Lorem cillum enim. Voluptate do voluptate sunt consectetur laboris nulla fugiat voluptate nulla commodo voluptate et mollit magna. Nisi sint amet sit sunt dolor deserunt id cupidatat Lorem sit.  reprehenderit eiusmod dolor commodo ea amet.</p>
        <br></br><p>try it now <a href='' style={{ color:"white" }} >learn more</a></p>
 </div>





    </div>
     );
}
 
export default InitialText;