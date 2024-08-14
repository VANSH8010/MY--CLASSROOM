import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { AddTeacher } from "../Components/AddTeacher";
import { AddStudent } from "../Components/AddStudent";
import { UserInTable } from "../Components/UserInTable";

export function Principal_Dashboard() {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/Principal/getAll`)
            .then((res) => {
                console.log(res.data.students);
                setStudents(res.data.students);
                setTeachers(res.data.teachers);
            }).catch((err) => {
                console.log(err);
            })
    }, [])

    return <div>
        <div>
            <AddTeacher email={email} password={password} setEmail={setEmail} setPassword={setPassword} setTeachers={setTeachers}></AddTeacher>
        </div>
        <div>
            <AddStudent  email={email} password={password} setEmail={setEmail} setPassword={setPassword} setStudents={setStudents}></AddStudent>
        </div>
        <div>
            <b>Teachers</b>
            {teachers.map((teacher) => {
                return <UserInTable email={teacher.email} role={"Teacher"} key={teacher._id} id={teacher._id}></UserInTable>
            })}
        </div>

    </div>
}