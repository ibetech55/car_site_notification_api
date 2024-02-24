import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import path from "path";
import expressFileUpload from "express-fileupload";
import YAML from "yamljs";
import { QueueListener } from "../../Utils/Queue/QueueListener";
import ql from "../../Utils/Queue";
import {
  NODE_ENV,
  NOTIFICATION_API_DOMAIN,
} from "../../Configs/dotenv/env_vars";

class HttpServer {
  app: express.Express;
  constructor() {
    this.app = express();
    this.middlewares();
    this.defaultHeaders();
    this.queues();
    console.log("Connected to Http Server");
  }

  queues() {
    ql.execute();
  }

  listen() {
    if (NODE_ENV === "development") {
      this.app.listen(5002, NOTIFICATION_API_DOMAIN, () =>
        console.log("Listening to 5002")
      );
    } else {
      this.app.listen(5002, () => console.log("Listening to 5002"));
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(expressFileUpload());
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  defaultHeaders() {
    this.app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
      );
      next();
    });
  }
}

export default new HttpServer();
