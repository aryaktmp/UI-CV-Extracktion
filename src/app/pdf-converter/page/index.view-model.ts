import { Injectable } from '@angular/core';
import { PDFConverterService } from '../api/services';

@Injectable({
  providedIn: 'root',
})
export class PdfConverterViewModel {
  convertedText: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private pdfConverterService: PDFConverterService) {}

  async uploadFile(event: any): Promise<void> {
    this.isLoading = true;
    this.convertedText = '';
    this.errorMessage = '';

    const file: File = event.target.files[0];
    if (file) {
      try {
        const response = await this.pdfConverterService
          .uploadPDF(file)
          .toPromise();

        this.convertedText = response?.text || '';

        if (response?.file_base64) {
          this.autoDownloadBase64File(
            response?.file_base64,
            response?.file_name
          );
        }
      } catch (error: any) {
        this.errorMessage =
          error.message || 'Terjadi kesalahan saat mengkonversi PDF.';
      } finally {
        this.isLoading = false;
      }
    }
  }

  private autoDownloadBase64File(base64: string, fileName: string): void {
    const a = document.createElement('a');
    a.href = `data:text/plain;base64,${base64}`;
    a.download = fileName || 'converted-text.txt';
    a.click();
  }
}
