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
    const wrap = document.getElementById('wrap') as HTMLElement;

    wrap.addEventListener('scroll', function (e) {
      if (this.scrollTop > 147) {
        wrap.classList.add('fix-search');
      } else {
        wrap.classList.remove('fix-search');
      }
    });
  }

  constructor(private router: Router) {}
  loadModule(link: boolean, path: string) {
    link ? window.open(path, '_blank') : this.router.navigate([path]);
  }
}
