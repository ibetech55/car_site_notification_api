import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import path from "path";
import expressFileUpload from "express-fileupload";
// import { userRoutes } from "../../Routes";
import YAML from "yamljs";
import { QueueListener } from "../../Utils/Queue/QueueListener";
import ql from "../../Utils/Queue";
import { NOTIFICATION_API_DOMAIN } from "../../Configs/dotenv/env_vars";
// import { AppError } from "../../ErrorHandler/AppError";

class HttpServer {
  app: express.Express;
  constructor() {
    this.app = express();
    this.middlewares();
    this.defaultHeaders();
    this.queues()
    // this.routes();
    // this.errorHandler();
    // this.swaggerInit();

    console.log("Connected to Http Server");
  }

  queues() {
    ql.execute()
  }

  // swaggerInit() {
  //   const swaggerDocument = YAML.load(
  //     `${path.resolve()}/src/Configs/swagger.yaml`
  //   );
  //   this.app.use(
  //     "/api-docs",
  //     swaggerUi.serve,
  //     swaggerUi.setup(swaggerDocument)
  //   );
  // }

  listen() {
    this.app.listen(5002, NOTIFICATION_API_DOMAIN, () => console.log("Listening to 5002"));
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(expressFileUpload());
    this.app.use(cors());
    this.app.use(morgan("dev"));
  }

  // routes() {
  //   this.app.use("/api", userRoutes);
  // }

  // errorHandler() {
  //   this.app.use(
  //     (err: Error, req: Request, res: Response, next: NextFunction) => {
  //       if (err instanceof AppError) {
  //         return res.status(err.statusCode).json({ message: err.message });
  //       } else {
  //         return res
  //         .status(500)
  //         .json({ message: `Internal Server Error ${err.message}` });
  //       }
    
  //     }
  //   );
  // }

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
