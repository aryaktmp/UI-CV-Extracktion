import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_SETTINGS } from './core';
import { environment } from 'src/environments/environment';
import { PDFConverterModule } from './pdf-converter';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PDFConverterModule],
  providers: [
    {
      provide: APP_SETTINGS,
      useValue: {
        apiServer: environment.apiServer,
      },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
