import express from "express"
import {ENV} from "./lib/env.js"


console.log(ENV.DB_URL); //Undefined if not config dotenv
console.log(ENV.PORT) //Undefined if not config dotenv

const app = express()

app.get("/health", (req,res) => {
    res.status(200).json({"message":"Api is up and running"})
})

app.listen(ENV.PORT, () => console.log("Server is listening on port:",ENV.PORT))