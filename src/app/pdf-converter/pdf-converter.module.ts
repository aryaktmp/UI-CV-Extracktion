import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { PDFConverterRoutingModule } from './pdf-converter.routing.module';
import { IndexComponentPDFConverter } from './page/index.component';
import { httpInterceptorProviders } from './api/interceptors';

@NgModule({
  imports: [CommonModule, HttpClientModule, PDFConverterRoutingModule],
  declarations: [IndexComponentPDFConverter],
  providers: [httpInterceptorProviders],
})
export class PDFConverterModule {}
