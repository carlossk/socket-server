import { Application } from "express";
import express from 'express';
import { SERVER_PORT } from '../global/environment';


export default class Server {

    public port: number;
    public app:Application;
    constructor(){
            this.app= express();
            this.port = SERVER_PORT
    }
    start(callback: Function){
        this.app.listen(this.port,callback);
    }

}