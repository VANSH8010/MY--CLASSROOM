import axios from "axios";

export function AddStudent({email, setEmail, setPassword, setStudents, password}){
    return <div>
        <div>ADD STUDENT</div>
            <div>
                <input onChange={(e) => {
                    setEmail(e.target.value);
                }} placeholder="email"></input>
                <input onChange={(e) => {
                    setPassword(e.target.value);
                }} placeholder="password"></input>
                <button onClick={() => {
                    axios.post(`http://localhost:3000/api/v1/Principal/createStud`, {
                        email: email,
                        password: password
                    }).then(() => {
                        axios.get(`http://localhost:3000/api/v1/Principal/getAll`)
                            .then((res) => {
                                setStudents(res.data.students);
                            }).catch((err) => {
                                console.log(err);
                            })
                    })
                }}>Add</button>
            </div>
    </div>
}