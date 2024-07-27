import express from "express"
import {PrismaClient} from "@prisma/client"
import "dotenv/config"
import prisma from "./DB/db.config.js";

const app = express();
const PORT = process.env.PORT 

app.get("/", (req, res) => {
    res.send("Its working")
})


app.listen(PORT, () => {
    console.log(`Server is runnig`)
})