import express, { json } from "express";
import { courseRouter } from "./routes/course.routes";
import { HandleErrors } from "./middleware/handleErrors.middleware";

export const app = express();

app.use(json());

app.use("/courses", courseRouter);

app.use(HandleErrors.execute);