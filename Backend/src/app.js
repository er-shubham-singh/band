import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extend:true, limit:'16kb'}))

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

import {userRouter} from '../src/routes/user.routes.js'
import { errorHandler } from './middlewares/errorHandler.js'
app.use("/api",userRouter)

/**********Admin Routes **********/
import { adminRoutes } from './routes/admin.routes.js'
app.use("/api",adminRoutes)

/**********Canteen Routes **********/
import { canteenRoutes } from './routes/canteen.routes.js'
app.use("/api", canteenRoutes)
app.use(errorHandler)
app.use((err, req, res, next) => {
  console.error("❌ ERROR STACK:");
  console.error(err.stack);   // 🔥 FULL ERROR
  console.error("❌ ERROR MESSAGE:", err.message);
  console.error("❌ ROUTE:", req.method, req.originalUrl);

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Something went wrong",
  });
});
export {app}
