import axios from "axios";
import { useState } from "react"

export function UserInTable({email, role, id}){
    const [showData, setShowData] = useState(true);
    const [editData, setEditData] = useState(false);
    const [emailPrime, setEmailPrime] = useState(email);

    return <div>
        {showData && <i>{email}</i>}
        {editData && <div>
            <input value={emailPrime} onChange={(e) => {
                setEmailPrime(e.target.value);
            }}></input>
            <button onClick={() => {
                setShowData(true);
                setEditData(false);
                axios.put(`http://localhost:3000/api/v1/Principal/${role}`, {
                    id: id,
                    email: emailPrime
                }).then((res) => {
                    setEmailPrime(res.data.email);
                }).catch((err) => {
                    console.log(err);
                })
        }}>Save</button></div>}
        {showData && <div>
            <button onClick={() => {
            setShowData(false);
            setEditData(true);
        }}>Edit</button></div>}
        {showData && <button>Delete</button>}
    </div>
}