import { Component, OnInit } from '@angular/core';
import { PdfConverterViewModel } from './index.view-model';

@Component({
  selector: 'app-index-pdf-converter',
  templateUrl: 'index.component.html',
})
export class IndexComponentPDFConverter implements OnInit {
  constructor(public readonly _pdfConverterViewModel: PdfConverterViewModel) {}

  ngOnInit(): void {}

  onFileSelected(event: any): void {
    this._pdfConverterViewModel.uploadFile(event);
  }
}
