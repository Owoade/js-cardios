import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import crypto from "crypto";
import lifecycle from './lifecycle';

dotenv.config();

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors({
  origin: "*"
      // origin: [ "http://localhost:3000", "https://dune-sandy.vercel.app", "https://2hmw4j.csb.app", "https://lw93qd.csb.app" ]
}))

let SERVICE_IS_AVAILABLE = true;

const SERVICE_BECOMES_UNAVAILABLE_IN = process.env.SERVICE_BECOMES_UNAVAILABLE_IN;

const SERVICE_RECOVERS_AFTER = process.env.SERVICE_RECOVERS_AFTER;

lifecycle(
    parseInt( SERVICE_BECOMES_UNAVAILABLE_IN ?? 0 ),
    parseInt( SERVICE_RECOVERS_AFTER ?? 0 ),
    () => SERVICE_IS_AVAILABLE = false,
    () => SERVICE_IS_AVAILABLE = true
)

app.get("/", (req, res)=>{

    if( !SERVICE_IS_AVAILABLE ) return res.status(503);
    
    res.json({
        status: true,
        data: {
            operation_id: crypto.randomUUID(),
            operation_status: "pending"
        } 
    })
})

app.listen(process.env.PORT, ()=> console.log("Third party service running"))