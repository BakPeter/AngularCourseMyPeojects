import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthIterseptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const modifeidReques = req.clone({
      headers: req.headers.append('AuthItercepterAddedHeader', 'added-header'),
    });

    // return next.handle(req);
    return next.handle(modifeidReques);
  }
}
