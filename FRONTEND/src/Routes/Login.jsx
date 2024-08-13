import { useState } from "react";
import axios from "axios";

export function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');

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
            })
        }}>Login</button>
    </div>
}