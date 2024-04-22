import { Router } from "express";
import { CourseController } from "../controllers/course.controller";
import { IsCourseIdValid } from "../middleware/isCourseIdValid.middleware";

export const courseRouter = Router();

const courseControllers = new CourseController();

courseRouter.post("/", courseControllers.create);
courseRouter.get("/", courseControllers.getMany);
courseRouter.get("/:id", IsCourseIdValid.execute, courseControllers.getOne);
courseRouter.patch("/:id", IsCourseIdValid.execute, courseControllers.update);
courseRouter.delete("/:id", IsCourseIdValid.execute, courseControllers.remove);