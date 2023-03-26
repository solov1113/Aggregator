import React, { useState } from "react";
import LeftBox from "./LeftBox";
import RightBox from "./RightBox";

function Parent() {
  const [result, setResult] = useState(null);

  const handleSubmit = (number, selectedOption) => {
    const result = `${selectedOption} of ${number}`;
    setResult(result);
  }

  return ( 
    <div className="main">
      <div className="button-container">
        <button className="connect-wallet-button">Connect Wallet</button>
      </div>
      <div className="title">
        <h1>Title Goes Here</h1>
        <p className="description">lorem epsomEsse dolor ullamco deserunt proident esse veniam aliqua id in aute sunt velit. <a href="/" target="_blank">link goes here</a></p>
      </div>
      <div className="parent">
        <LeftBox onSubmit={handleSubmit} />
        <RightBox result={result} />
      </div>
    </div>
  );
}
 
export default Parent;
