import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ThemeProviderService } from './core/theme-provider.service';
import { FluidAction } from './model/fluid-action.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  theme$: Observable<string>;
  title = 'Micro UI example';
  navLinks: FluidAction[] = [
    {
      label: 'Overview',
      route: '',
      selected: true,
    },
    {
      label: 'Getting Started',
      route: 'getting-started',
    },
    {
      label: 'FAQs',
      route: 'faqs',
    },
  ];

  constructor(
    private readonly themeProvider: ThemeProviderService,
    private readonly router: Router
  ) {
    this.theme$ = this.themeProvider.getTheme();
  }

  navigate(link: any) {
    console.log('LINK', link);
    this.router.navigate([link.detail]);
  }

  changeTheme(theme: string) {
    this.themeProvider.setTheme(theme);
  }
}
