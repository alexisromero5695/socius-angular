import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("Pasó por el interceptor");

    const headers = new HttpHeaders({
      // 'token-usuario': '123abc',
    });
    
    let combinedParams = req.params.append("intercetor", "true");

    const reqClone = req.clone({
      params: combinedParams
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );
  }

  manejarError(error: HttpErrorResponse) {
    console.log("Sucedio un error");
    console.warn(error);
    return throwError("Error personalizado")
  }
}
