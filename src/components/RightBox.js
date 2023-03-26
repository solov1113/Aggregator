import React from 'react';
import './style.css'
import InitialText from './InitialText'
import Data from './Data';
function RightBox({ result }) {
  return (

     <div className="rightbox">
       {result ? <Data /> : <InitialText />}
     </div>

  );
}

export default RightBox;
