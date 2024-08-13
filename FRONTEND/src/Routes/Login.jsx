import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    return <div>
        <input onChange={(e) => {
            setEmail(e.target.value);
        }} placeholder="email"></input>
        <input onChange={(e) => {
            setPassword(e.target.value);
        }} placeholder="password"></input>
        <input onChange={(e) => {
            setRole(e.target.value);
        }} placeholder="role"></input>
        <button onClick={() => {
            axios.post(`http://localhost:3000/api/v1/${role}/login`, {
                email: email,
                password: password
            }).then((res) => {
                navigate(`/${role}Dashboard`);
            }).catch((err) => {
                window.alert("User Not Found");
            })
        }}>Login</button>
    </div>
}