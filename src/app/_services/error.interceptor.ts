import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { AuthService } from '../modules/authentication/auth-service.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
  private errorHandler(response: any): Observable<any> {
    // console.error('root error res', response)
    const status = response?.status;
    if (status === 401 || status === 403) {
      this.authService.logout();
    }
    const error = response.error;
    let message = response.message;
    if (typeof error === 'object') {
      const keys = Object.keys(error);
      if (keys.some(item => item === 'message')) {
        message = error.message;
      }
    } else if (typeof error === 'string') {
      message = error;
    }
    return throwError({ message, status });
  }
}
