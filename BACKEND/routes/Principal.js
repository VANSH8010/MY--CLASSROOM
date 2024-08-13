const express = require('express');
const Principal = express.Router();
require("dotenv").config();

Principal.use(express.json());

// <<<<<<< HEAD
Principal.post("/login", async (req, res) => {
    try {
        const body = req.body;

        if(body.email != process.env.Principal_Email || body.password != process.env.Principal_Password){
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

module.exports = Principal;


