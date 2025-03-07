export class PDFConverterResponseDto {
  public constructor(
    public text: string = '',
    public file_name: string = '',
    public file_base64: string = ''
  ) {}
}
