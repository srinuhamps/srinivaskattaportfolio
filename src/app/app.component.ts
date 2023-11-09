import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'srinivas-portfolio';
  constructor(private router: Router) {}
  loadModule(event: string) {
    this.router.navigate(['/projects/pro']);
  }
}
