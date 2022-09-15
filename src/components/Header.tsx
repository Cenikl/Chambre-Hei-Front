import React, {useEffect, useState} from 'react';
import '../App.css';
import sample4 from '../images/icon3.png';


export default function Head(){

    return (
        <div className="head">
            <img src={sample4} alt="Image not found" id="fimg"/>
            <a href={"/"}>
                H&Hotel
            </a>
            <form action="/roompage">
                <button className="fbtn">Rooms</button>
            </form>
            <form action="/book">
                <button className="fbtn">Book</button>
            </form>
            <button className="btn">Register</button>
            <button className="lbtn">Log out</button>
        </div>
    )
}