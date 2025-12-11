import express from "express"
import {ENV} from "./lib/env.js"
import path from "path"
import { connectDB } from "./lib/db.js"
import cors from "cors"
import {serve} from "inngest/express"
import { inngest } from "./lib/inngest.js"
import { functions } from "./lib/inngest.js"
import { clerkMiddleware } from "@clerk/express";
import chatRoutes from "./routes/chatRoutes.js"

// console.log(ENV.DB_URL); //Undefined if not config dotenv
// console.log(ENV.PORT) //Undefined if not config dotenv

const app = express()
const __dirname = path.resolve()

//middleware
app.use(express.json())
//credentials->Sever allows the browser to include cookies on request
app.use(cors({origin:ENV.CLIENT_URL,credentials:true}))

app.use(clerkMiddleware());//this add auth field to req object: req.auth()

app.use("/api/inngest",serve({client:inngest, functions}))
app.use("/api/chat", chatRoutes)


app.get("/health", (req,res) => {
    res.status(200).json({"message":"Api is up and running"})
})


//When u pass an array of middleware to express it automatically flattens and 
// executes the sequentially one by one
// app.get("/video-calls",protectRoute, (req,res) => {
//     res.status(200).json({"message":"This is a protected route"})
// })


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
 