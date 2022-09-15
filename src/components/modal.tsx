import React, {useRef, useState} from 'react';
import '../App.css';
import axios from "axios";;

export default function Modal(props:any){
    const idRef = useRef(null);
    const numberRef = useRef(null);
    const catRef = useRef(null);
    const statRef = useRef(null);
    const priceRef = useRef(null);
    const [show,setShow] = useState(false);

    const [post,setPost] = useState(null);

    const ROOMS_API_REST_URL = "http://localhost:8080/rooms"
    const postRoom = async () => {
        try {
            axios.post(ROOMS_API_REST_URL,{
                // @ts-ignore
                id:(idRef.current.value.toString()),
                // @ts-ignore
                category:(catRef.current.value.toString()),
                // @ts-ignore
                number:parseInt(numberRef.current.value),
                // @ts-ignore
                price:parseInt(priceRef.current.value),
                // @ts-ignore
                status:(statRef.current.value)
            }).then((response) => {
                setPost(response.data);
            });
            // @ts-ignore
        setShow(true);
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
                        ref={idRef}
                        type="text"
                        name="email"
                        id="roomId"
                        required={true}
                        placeholder="Put the id of the room here..."
                    />
                    <br/> <br/>
                    <label htmlFor="" id="test">Number :</label> <br/>
                    <input
                        ref={numberRef}
                        type="text"
                        name="number"
                        id="number"
                        required={true}
                        placeholder="Put the number of the room here..."
                    />
                    <br/> <br/>
                    <label htmlFor="" id="test">Category :</label> <br/>
                    <input
                        ref={catRef}
                        type="text"
                        name="category"
                        id="category"
                        required={true}
                        placeholder="Choose between normal,vip,family"
                    />
                    <br/> <br/>
                    <label htmlFor="" id="test">Status :</label> <br/>
                    <input
                        ref={statRef}
                        type="text"
                        name="status"
                        id="status"
                        required={true}
                        placeholder="Choose between empty,booked"
                    />
                    <br/> <br/>
                    <label htmlFor="" id="test">Price :</label> <br/>
                    <input
                        ref={priceRef}
                        type="number"
                        name="price"
                        id="price"
                        required={true}
                        placeholder="Choose between 15000,20000,25000"
                    />
                    <br/> <br/>
                </div>
                {show &&
                <div>
                    <p id="goodans">It Worked !</p>
                </div>
                }
                <div className="modal-footer">
                    <button className="button" onClick={postRoom}>Save / Create</button>
                    <button className="button" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}
