import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { generalInterceptor } from './general.interceptor';

export function interceptorConfig(
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
): Observable<HttpEvent<unknown>> {
  if (!sessionStorage.getItem('token')) {
    return next(request);
  }
  return generalInterceptor(request, next);
}
