import React, {useEffect, useState} from 'react';
import '../App.css';
import sample from '../images/image1.jpg'
import sample2 from '../images/icon1.png'
import sample3 from '../images/icon2.png'


export default function Home(){
    return (
        <div className="middlecard">
            <div className="fline">
            <h1>Welcome to H&Hotel</h1>
            </div>
            <hr/>
            <div className="content">
                <div className="image-in">
                    <img src={sample} alt="No image found"/>
                </div>
                <div className="contenttalk">
                    <div className="contenttalkone">
                    <img src={sample2} alt="" id="test"/>
                    <h2>Description</h2>
                    </div>
            <p>H&Hotel is a quiet, comfortable hotel located near the Ecological Sanctuary and the Monteverde Butterfly Gardens in an area called Cerro Plano, an ideal location half way between the Monteverde Cloud Forest reserve and the main village of the Monteverde area (Santa Elena), in close proximity to several restaurants and activities. All rooms have private bathrooms with hot water. </p>
                    <div className="contenttalktwo">
                        <img src={sample3} alt="" id="test"/>
                        <h2>A little word from our client</h2>
                    </div>
                    <h3>Programmer leader evaluation:</h3>
                    <p>“Very clean rooms, excellent meals with talented live music at dinner, friendly staff, and nice location made this a wonderful place to stay.” “I loved the food and the staff.”</p>
                </div>
                </div>
            <hr/>
            <div className="fline">
                <h1>Link of the hotel</h1>
            </div>
            <hr/>
            <br/>
            <div className="last">
            <a href="/roompage" id="rooming">Go to room's list</a>
            <a href="/book" id="brooking">Book</a>
            </div>
        </div>
    )
}