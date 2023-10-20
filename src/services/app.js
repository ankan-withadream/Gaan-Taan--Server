import express from 'express';
import cors from "cors";
import parser from "body-parser";

const app = express();

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

function Initialize_app() {

    app.use(cors(corsOptions));
    app.use(parser.json());
    app.use(parser.urlencoded({extended: true}));
    
}


export {Initialize_app, app}