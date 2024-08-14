const express = require('express');
const student = express.Router();
const {Student} = require("../db");
student.use(express.json());

student.post("/login", async (req, res) => {
    try {
        const body = req.body;

        const STUDENT = await Student.findOne({
            email: body.email,
            password: body.password
        })

        if(!STUDENT){
            return res.status(404).json({
                message: "User not found! Contact The Principal or Teachers"
            })
        }

        res.status(200).json({
            message: "Student user logged in"
        })

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
})

module.exports=student;