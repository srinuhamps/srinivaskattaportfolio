import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { SpfSharedModule } from '../spf-shared/spf-shared.module';
import { ToyotaComponent } from './toyota/toyota.component';
import { HtcSomComponent } from './htc-som/htc-som.component';
import { BcbsComponent } from './bcbs/bcbs.component';
import { EcopoundComponent } from './ecopound/ecopound.component';
import { ProjectsComponent } from './projects.component';
import { MatImports } from '../mat-imports';

@NgModule({
  declarations: [
    ToyotaComponent,
    HtcSomComponent,
    BcbsComponent,
    EcopoundComponent,
    ProjectsComponent,
  ],
  imports: [CommonModule, MatImports, ProjectsRoutingModule, SpfSharedModule],
})
export class ProjectsModule {}
