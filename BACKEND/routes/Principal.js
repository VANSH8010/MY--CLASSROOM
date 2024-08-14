const express = require('express');
const { Student, Teacher } = require('../db');
const Principal = express.Router();
require("dotenv").config();

Principal.use(express.json());

Principal.post("/login", async (req, res) => {
    try {
        const body = req.body;

        if (body.email != process.env.Principal_Email || body.password != process.env.Principal_Password) {
            return res.status(404).json({
                message: "Principal user not found"
            });
        }

        res.status(200).json({
            message: "Principal user logged in"
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

Principal.get("/getAll", async (req, res) => {
    try {
        const students = await Student.find({});
        const teachers = await Teacher.find({});
        // console.log(students);

        res.status(200).json({
            students: students,
            teachers: teachers
        });

    } catch (err) {
        res.status(500).send("Internal Server Error!");
    }
})

Principal.post("/createTeach", async (req, res) => {
    try {
        const body = req.body;

        await Teacher.create({
            email: body.email,
            password: body.password
        })

        res.status(200).json({
            message: "Teacher Added"
        });

    } catch (err) {
        res.status(500).send("Internal Server Error!");
    }
})

Principal.post("/createStud", async (req, res) => {
    try {
        const body = req.body;

        await Student.create({
            email: body.email,
            password: body.password
        })

        res.status(200).json({
            message: "Student Added"
        });

    } catch (err) {
        res.status(500).send("Internal Server Error!");
    }
})

Principal.put("/Teacher", async (req, res) => {
    try {
        const body = req.body;
        console.log(body);

        const TEACHER = await Teacher.findOneAndUpdate(
            { _id: body.id },
            { $set: { email: body.email } }
        )

        console.log(TEACHER);

        res.status(200).json({
            email: TEACHER.email
        });
    }catch(err){
        res.status(500).send("Internal Server Error!");
    }
})

module.exports = Principal;


