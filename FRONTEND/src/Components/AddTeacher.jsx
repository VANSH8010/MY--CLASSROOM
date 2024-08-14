import axios from "axios";

export function AddTeacher({email, setEmail, setPassword, setTeachers, password}){
    return <div>
        <div>ADD TEACHER</div>
            <div>
                <input onChange={(e) => {
                    setEmail(e.target.value);
                }} placeholder="email"></input>
                <input onChange={(e) => {
                    setPassword(e.target.value);
                }} placeholder="password"></input>
                <button onClick={() => {
                    axios.post(`http://localhost:3000/api/v1/Principal/createTeach`, {
                        email: email,
                        password: password
                    }).then(() => {
                        axios.get(`http://localhost:3000/api/v1/Principal/getAll`)
                            .then((res) => {
                                setTeachers(res.data.teachers);
                            }).catch((err) => {
                                console.log(err);
                            })
                    })
                }}>Add</button>
            </div>
    </div>
}