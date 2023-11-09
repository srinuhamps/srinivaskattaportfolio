import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpfSharedModule } from './spf-shared/spf-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatImports } from './mat-imports';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpfSharedModule,
    BrowserAnimationsModule,
    MatImports,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
