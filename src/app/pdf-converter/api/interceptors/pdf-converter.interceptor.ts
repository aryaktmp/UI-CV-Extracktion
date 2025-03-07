import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class PDFCOnverterInterceptor implements HttpInterceptor {
  public intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.body instanceof FormData) {
      const file = req.body.get('file');

      if (file && file instanceof Blob && file.type === 'application/pdf') {
        const modifiedReq = req.clone({
          setHeaders: {
            'Custom-Header': 'PDF-Upload-Header',
          },
        });

        return next.handle(modifiedReq);
      }
    }

    return next.handle(req);
  }
}
