import { NextFunction, Request, Response } from "express";
import { AppError } from "../error/AppError";

export class HandleErrors {
   static execute(
      error: Error,
      request: Request,
      response: Response,
      next: NextFunction
   ) {
      if (error instanceof AppError) {
         return response.status(error.statusCode).json({ message: error.message });
      }

      console.log(error);
      return response.status(500).json({ message: "Internal server error" });
   }
}
