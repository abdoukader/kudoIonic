import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {

    const authService = this.injector.get(AuthService);
    // tslint:disable-next-line: prefer-const
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+ authService.getToken()
      }
    });
    return next.handle(tokenizedReq);
  }
}
