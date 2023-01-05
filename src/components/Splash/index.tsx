import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



export const Splash: React.FC = () => {

  return (
    <>

    <div id="stripes">


<div className="card1"><canvas className="orb-canvas"></canvas>
<div className="overlay">
  <div className="overlay__inner">
    <h1 className="overlay__title">
      <span className="text-gradient"></span> 
    </h1>
    <p className="overlay__description">
	  <strong>Anonymous Web Services</strong>  is the First Anonymous Decentralized Public Edge Cloud 
      <strong> </strong></p>

      

 
    </div>
  </div>
  </div>

</div>
</>
  );
};

export default Splash;
