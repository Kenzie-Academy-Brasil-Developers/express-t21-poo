import { Request, Response } from "express";
import { CourseService } from "../services/course.service";

export class CourseController {
   create(request: Request, response: Response) {
      const courseService = new CourseService();

      const course = courseService.create(request.body);

      return response.status(201).json(course);
   }

   getMany(request: Request, response: Response) {
      const courseService = new CourseService();

      const courses = courseService.getMany(request.query.search as string);

      return response.status(200).json(courses);
   }

   getOne(request: Request, response: Response) {
      const courseService = new CourseService();
      const existingCourse = response.locals.course;

      const course = courseService.getOne(existingCourse);

      return response.status(200).json(course);
   }

   update(request: Request, response: Response) {
      const courseService = new CourseService();
      const existingCourse = response.locals.course;

      const course = courseService.update(existingCourse, request.body);

      return response.status(200).json(course);
   }

   remove(request: Request, response: Response) {
      const courseService = new CourseService();

      const message = courseService.delete(Number(request.params.id));

      return response.status(200).json(message);
   }
}
