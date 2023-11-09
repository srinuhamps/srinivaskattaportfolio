import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @HostListener('window:scroll', ['$event'])
  onScroll(e: any) {
    console.log('window', e);
  }

  constructor(private router: Router) {}
  loadModule(path: string) {
    this.router.navigate([path]);
  }
}
