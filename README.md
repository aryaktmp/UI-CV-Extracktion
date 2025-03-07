# PDF to Text Converter - Angular Frontend

## Description

This is the **Angular frontend** for the **PDF to Text API**, allowing users to upload a **PDF file**, extract text, and automatically download the converted text as a `.txt` file.

## Project Structure

```
src/
│── app/
│   ├── core/
│   │   ├── settings/
│   │   │   ├── index.ts
│   │   │   ├── settings.ts
│   │   ├── index.ts
│   │
│   ├── pdf-converter/
│   │   ├── api/
│   │   │   ├── dtos/
│   │   │   │   ├── pdf-converter.request.ts
│   │   │   │   ├── pdf-converter.response.ts
│   │   │   ├── services/
│   │   │   │   ├── pdf-converter.service.ts
│   │   │   ├── interceptors/
│   │   │   │   ├── pdf-converter.interceptor.ts
│   │   │   ├── index.ts
│   │
│   │   ├── page/
│   │   │   ├── index.component.html
│   │   │   ├── index.component.ts
│   │   │   ├── index.view-model.ts
│   │   │   ├── pdf-converter.module.ts
│   │   │   ├── pdf-converter.routing.module.ts
│   │   │   ├── index.ts
│   │
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.spec.ts
│   ├── app.component.ts
│   ├── app.module.ts
│
│── environments/
│   ├── environment.prod.ts
│   ├── environment.ts
```

## Installation and Running the Project

### 1. Clone the Repository

```bash
git clone https://github.com/your-repository/pdf-to-text-angular.git
cd pdf-to-text-angular
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Angular Application

```bash
ng serve
```

The application will be running at `http://localhost:4200/`.

## Features

- Upload a **PDF file**.
- Extract and display text from the **PDF**.
- Automatically **download the extracted text** as a `.txt` file.
- Shows **loading indicators** while processing.
- Displays **error messages** if conversion fails.

## API Integration

This Angular app interacts with the **FastAPI backend**. Make sure the backend is running before using the frontend.

- **Backend API Endpoint:** `http://127.0.0.1:8000/api/convert-pdf-to-text`
- The API response includes:
  ```json
  {
    "text": "Extracted text from the PDF...",
    "file_name": "converted-text.txt",
    "file_base64": "U3RyaW5nIEJhc2U2NCBlbmNvZGVkIHRleHQuLi4="
  }
  ```

## How It Works

1. **User selects a PDF file**.
2. **File is sent to the FastAPI backend**.
3. **API returns extracted text and Base64 of the `.txt` file`**.
4. **Frontend automatically downloads the `.txt` file**.

## License

MIT License
