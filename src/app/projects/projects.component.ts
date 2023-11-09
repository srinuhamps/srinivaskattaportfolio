import { Component } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  constructor(private router: Router) {}
  navigate(path: MatButtonToggleChange) {
    console.log(path);
    this.router.navigate([`/projects/${path.value}`]);
  }
}
