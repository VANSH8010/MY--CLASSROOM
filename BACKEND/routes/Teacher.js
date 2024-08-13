const express = require('express');
const teacher = express.Router();
const {Teacher} = require('../db');
teacher.use(express.json());

teacher.post("/login", async (req, res) => {
    try {
        const body = req.body;

        const TEACHER = await Teacher.findOne({
            email: body.email,
            password: body.password
        })

        if(!TEACHER){
            return res.status(404).json({
                message: "User not found"
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

module.exports=teacher;