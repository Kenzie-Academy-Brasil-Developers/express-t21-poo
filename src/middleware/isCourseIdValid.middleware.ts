// Middle - meio
// etapa
// etapas que se repetem

import { NextFunction, Request, Response } from "express";
import { courseDatabase } from "../database/database";
import { AppError } from "../error/AppError";

export class IsCourseIdValid{
    static execute(request: Request, response: Response, next: NextFunction){
        //Executar uma lógica
        const existingCourse = courseDatabase.find(course => course.id === Number(request.params.id));

        if(!existingCourse){
            throw new AppError("Course not found.", 404);
        }

        response.locals.course = existingCourse;

        next(); //Prosseguir para próxima etapa
    }
}