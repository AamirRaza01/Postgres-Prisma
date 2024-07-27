import express from "express"
import "dotenv/config"
import cookieParser from "cookie-parser";
import routes from "./routes/index.js"

const app = express();
const PORT = process.env.PORT 

app.use(express.json())
app.use(express.urlencoded({extended : true}))
// app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("Its working")
})


app.use(routes)

app.listen(PORT, () => {
    console.log(`Server is runnig on ${PORT}`)
})