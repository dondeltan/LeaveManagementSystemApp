import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthHtppInterceptorService  implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log("inside interceptor")
    console.log(req)
    var lastPart = req.url.substr(req.url.lastIndexOf('/') + 1);
    if (sessionStorage.getItem('authenticaterUser') && sessionStorage.getItem('token') && lastPart != "auth") {
     let token =  sessionStorage.getItem('token')!;
      req = req.clone({
        setHeaders: {
          'Authorization': token
        }
      })
    }

    return next.handle(req);

  }
}
