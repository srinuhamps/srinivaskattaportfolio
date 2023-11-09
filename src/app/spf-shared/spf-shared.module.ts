import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MatImports } from '../mat-imports';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [MatImports, CommonModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SpfSharedModule {}
