import React from 'react';
import '../App.css';
import axios from "axios";

export default function Modal(props:any){
    const ROOM_API_REST_URL = "http://localhost:8080/room"
    const article = {id: "",number: "",category: "",status: "",price: 0};
    const getAllRooms = async () => {
        try {
            const stat = await axios.get(ROOM_API_REST_URL);
        }catch (err) {
            console.error(err)
        }
    }
    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h2 className="modal-title">Create/update a room</h2>
                </div>
                <div className="modal-body">
                    <label htmlFor="" id="test">Room's Id :</label> <br/>
                    <input
                        type="text"
                        name="email"
                        id="roomId"
                        required={true}
                        placeholder="Put the id of the room here..."
                    />
                    <br/> <br/>
                    <label htmlFor="" id="test">Number :</label> <br/>
                    <input
                        type="text"
                        name="number"
                        id="number"
                        required={true}
                        placeholder="Put the number of the room here..."
                    />
                    <br/> <br/>
                    <label htmlFor="" id="test">Category :</label> <br/>
                    <input
                        type="text"
                        name="category"
                        id="category"
                        required={true}
                        placeholder="Choose between normal,vip,family"
                    />
                    <br/> <br/>
                    <label htmlFor="" id="test">Status :</label> <br/>
                    <input
                        type="text"
                        name="status"
                        id="status"
                        required={true}
                        placeholder="Choose between empty,booked"
                    />
                    <br/> <br/>
                    <label htmlFor="" id="test">Price :</label> <br/>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        required={true}
                        placeholder="Choose between 15000,20000,25000"
                    />
                    <br/> <br/>
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={() => {article.id = "test"
                        console.log(article);}}>Save / Create</button>
                    <button className="button" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}
