import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class ResponseMapperInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(map((res) => {
      if (res instanceof HttpResponse) {
        if (res.body.data) {
          const clone = res.clone({
            body: res.body.data
          });
          return clone;
        } else {
          if (res.body.status === 409) {

          } else {

          }
          throw res.body.error;
        }
      } else {
        return res;
      }
    }));
  }
}
