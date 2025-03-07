import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PDFCOnverterInterceptor } from './pdf-converter.interceptor';

export const httpInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: PDFCOnverterInterceptor,
    multi: true,
  },
];
