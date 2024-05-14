import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import md5 from '../md5Hash';

export function generalInterceptor(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  const requestWithAuth = request.clone({
    setHeaders: {
      'Access-Control-Allow-Origin': '*',
      'API-Key': `${environment.Api_key}`,
      signature: md5(
        `${request.body}` +
          `${environment.Api_key}` +
          `${environment.Api_secret}`
      ) as string,
    },
  });

  return next(requestWithAuth).pipe(
    catchError((error: HttpErrorResponse) => {
      return throwError(() => new Error(error.message));
    }),
    retry(1)
  );
}
