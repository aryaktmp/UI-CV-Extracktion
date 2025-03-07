import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_SETTINGS, AppSettings } from 'src/app/core';
import { Observable } from 'rxjs';
import { PDFConverterResponseDto } from '../dtos';

@Injectable({ providedIn: 'root' })
export class PDFConverterService {
  private readonly pdfConverterRoute!: string;

  constructor(
    @Inject(APP_SETTINGS) _appSettings: AppSettings,
    private readonly _httpClient: HttpClient
  ) {
    this.pdfConverterRoute = `${_appSettings.apiServer}/convert-pdf-to-text`;
  }

  public uploadPDF(file: File): Observable<PDFConverterResponseDto> {
    const formData = new FormData();
    formData.append('file', file, file.name);

    return this._httpClient.post<PDFConverterResponseDto>(
      this.pdfConverterRoute,
      formData
    );
  }
}
