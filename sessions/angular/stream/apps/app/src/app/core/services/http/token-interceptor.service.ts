import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'apps/app/src/environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private readonly storage: StorageService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.storage.get('token') ?? '';
    const clone = req.clone({
      headers: req.url.indexOf(environment.strapiApiBase) >= 0 ? req.headers : req.headers.set('Authorization', `Bearer ${token}`)
    });
    return next.handle(clone);
  }
}
