import { UserRole } from "@stream/domain";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export const AuthGuard = (req: Request, res: Response, next: NextFunction) => {
  AuthGuardFn(req).then((decodedToken => {
    (<any>req).user = decodedToken;
    next(null);
  })).catch(err => {
    res.status(401).json(err);
  })
};

export function AuthGuardFn(req: Request): Promise<{
  role: UserRole;
  id: string;
  name: string;
}> {
  const token = (req.get("Authorization") ?? "").split(" ").pop();
  // Bearer sdkjfhkjsdfhskjfhkdsjfhskd
  return new Promise((resolve, reject) => {
    if (!token) {
      reject({
        message: "Token not provided"
      });
      return;
    }
    verify(token, process.env.secret, {
      // issuer: "DEF"
    }, (err, decodedToken) => {
      if (err) {
        reject(err);
        // return
      } else {
        resolve(decodedToken as any);
      }
    });

  })
}
