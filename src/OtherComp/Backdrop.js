import React from 'react';
import './Backdrop.css';
const backdrop = (props) =>{
    props.showmodal ? <div className="Backdrop"></div> : null
};

export default backdrop;
