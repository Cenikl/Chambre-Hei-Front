import React, {useEffect, useState} from 'react';
import '../App.css';
import axios from "axios";
import Modal from "./modal"

export default function Room(){
    const [roomsList,setRoomsList] = useState([]);
    const ROOMS_API_REST_URL = "http://localhost:8080/rooms"
    const ROOM_API_REST_URL = "http://localhost:8080/room"
    const [show,setShow] = useState(false);

    const getAllRooms = async () => {
        try {
            const stat = await axios.get(ROOMS_API_REST_URL);
            if (stat) {
                setRoomsList(stat.data);
                console.log(roomsList);
            }
        }catch (err) {
                console.error(err)
            }
    }
    const deleteRoomByid = async (roomId: string) => {
        try {
            await axios.delete(ROOM_API_REST_URL+ '/' + roomId);
            const stat = await axios.get(ROOMS_API_REST_URL);
            if (stat) {
                setRoomsList(stat.data);
                console.log(roomsList);
            }
        }catch (err) {
            console.error(err)
        }
    }

    // @ts-ignore
    return (
        <div className="middlecard">
            <Modal onClose={() => {setShow(false)}} show={show} />
            <div className="fline">
            <h1>List of free rooms</h1>
                <button className="tobook" onClick={getAllRooms}>Get all rooms</button>
                <button className="tocrete" onClick={() => {setShow(true)}}>Create a new room</button>
            </div>
            <hr/>
            <table className="infoTable">
                <thead>
                <tr>
                    <th>Room's Id</th>
                    <th>Number</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Price</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tfoot>
                <tr>
                    <td colSpan={6}>
                        <div className="links"><a href="#">&laquo;</a> <a className="active" href="#">1</a> <a href="#">2</a> <a href="#">3</a> <a href="#">4</a> <a href="#">&raquo;</a></div>
                    </td>
                </tr>
                </tfoot>
                <tbody>
                {roomsList?.map(({id,number,category,status,price}) => (
                    <tr>
                        <td>{id}</td>
                        <td>{number}</td>
                        <td>{category}</td>
                        <td>{status}</td>
                        <td>{price}</td>
                        <td>
                            -- @ts-ignore
                            <button className="todeleteroom" onClick={() => {
                                // @ts-ignore
                                deleteRoomByid(id.toString())}}>Delete</button>
                            <button className="toviewroom" onClick={() => {setShow(true)}}>View</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}