import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtcSomComponent } from './htc-som/htc-som.component';
import { ToyotaComponent } from './toyota/toyota.component';
import { BcbsComponent } from './bcbs/bcbs.component';
import { EcopoundComponent } from './ecopound/ecopound.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent,
    children: [
      {
        path: 'htcsom',
        component: HtcSomComponent,
      },
      {
        path: 'toyota',
        component: ToyotaComponent,
      },
      {
        path: 'bcbs',
        component: BcbsComponent,
      },
      {
        path: 'ecopound',
        component: EcopoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
