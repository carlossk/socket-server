import { Application } from "express";
import express from "express";
import { SERVER_PORT } from "../global/environment";
import socketIO from "socket.io";
import http from "http";

export default class Server {
  private static _instance: Server;
  public port: number;
  public app: Application;
  public io: socketIO.Server;
  public httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;
    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);
    this.listenSocket();
  }
  public static get instance() {
      return this._instance || (this._instance= new this());
  }
  private listenSocket() {
    console.log("listening conection");
    this.io.on("connection", client => {
      console.log("new client conected");
    });
  }
  start(callback: Function) {
    this.httpServer.listen(this.port, callback);
  }
}
