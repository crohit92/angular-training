import { NextFunction, Request, Response } from "express";
import { AuthGuardFn } from "./auth.guard";
import { UserRole } from '@stream/domain';
export const AdminAuthGuard = (req: Request, res: Response, next: NextFunction) => {
  AuthGuardFn(req).then((decoded => {
    if (decoded.role === UserRole.Admin) {
      (<any>req).user = decoded;
      next(null);
    } else {
      res.status(401).json({
        message: "Unauthorized"
      })
    }
  })).catch((err) => {
    res.status(401).json(err);
  })

};
