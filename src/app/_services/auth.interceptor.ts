import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, switchMap, take } from 'rxjs';
import { AuthService } from '../modules/authentication/auth-service.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService:AuthService) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
 // stage 1: Check if request for refresh token
 if (request.url.indexOf('/auth/refresh') !== -1) {
  return next.handle(request);
}
const data = this.authService.userData;
const accessToken = data?.access_token;
// stage 2: Checking access_token exists(mean user logged in) or not
if (accessToken) {
  // stage 3: checking access_token validity
  if (this.authService.isAuthTokenValid(accessToken)) {
    let modifiedReq = request.clone({
      headers: request.headers.append('Authorization', `Bearer ${accessToken}`)
    });
    return next.handle(modifiedReq)
  }
  // stage 4: Going to generate new tokens
  return this.authService.generateNewTokens()
    .pipe(
      take(1),
      switchMap((res: any) => {
        let modifiedReq = request.clone({
          headers: request.headers.append('Authorization', `Bearer ${res?.data?.access_token}`)
        });
        return next.handle(modifiedReq)
      })
    )
  
}
return next.handle(request);
}
}
