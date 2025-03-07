import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponentPDFConverter } from './page/index.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'pdf-converter',
        component: IndexComponentPDFConverter,
      },
    ]),
  ],
  exports: [RouterModule],
})
export class PDFConverterRoutingModule {}
