import express from "express"
import {ENV} from "./lib/env.js"
import path from "path"
import { connectDB } from "./lib/db.js"


// console.log(ENV.DB_URL); //Undefined if not config dotenv
// console.log(ENV.PORT) //Undefined if not config dotenv

const app = express()
const __dirname = path.resolve()

app.get("/health", (req,res) => {
    res.status(200).json({"message":"Api is up and running"})
})

app.get("/books", (req,res) => {
    res.status(200).json({"message":"Api is up and running for books"})
})

//Make our app ready for deployment
if(ENV.NODE_ENV === "production"){
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // /{*any} any other routes user visits other than health and boooks - display index.html(react-app)
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server is listening on port:", ENV.PORT);
    });
  } catch (error) {
    console.error("Error starting the server",error)
  }
}

startServer()
 