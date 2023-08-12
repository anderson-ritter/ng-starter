import { Component, inject } from '@angular/core';

import { Language, Theme } from './../../shared/models/settings';
import { AuthService } from './../../shared/services/auth.service';
import { SharedModule } from './../../shared/shared.module';
import { CoreStore } from './../../store/core/core.store';
import { SettingsStore } from './../../store/settings';
import { NavItemComponent } from './components/sidebar/nav-item.component';
import { NavComponent } from './components/sidebar/nav.component';
import { NavigationItem, SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SharedModule,
    SidebarComponent,
    NavComponent,
    NavItemComponent
  ],
  templateUrl: './main.component.html',
  host: { 'class': 'h-screen flex' }
})
export class MainComponent {

  private readonly authService: AuthService = inject(AuthService);
  private readonly coreStore: CoreStore = inject(CoreStore);
  private readonly settingsStore: SettingsStore = inject(SettingsStore);

  readonly navigation: NavigationItem[] = [
    { path: '/dashboard', icon: 'layout-dashboard', label: 'ng-starter.navigation.dashboard' },
    { path: '/dashboard2', icon: 'layout-dashboard', label: 'ng-starter.navigation.dashboard' }
  ];

  readonly languages: Map<Language, { icon: string, label: string }> = new Map([
    ['pt-br', { icon: 'fi-br', label: 'ng-starter.settings.language.pt-br' }],
    ['en', { icon: 'fi-us', label: 'ng-starter.settings.language.en' }]
  ]);

  readonly themes: { value: Theme; label: string; }[] = [
    { value: 'default-theme', label: 'ng-starter.settings.themes.light' },
    { value: 'dark-theme', label: 'ng-starter.settings.themes.dark' }
  ];

  readonly user$ = this.authService.getLoggedUser()
  readonly sidebar$ = this.coreStore.sidebar$;
  readonly theme$ = this.settingsStore.theme$;
  readonly language$ = this.settingsStore.language$;

  onLanguageSelect(language: Language) {
    this.settingsStore.changeLanguage(language);
  }

  onThemeSelect(theme: Theme) {
    this.settingsStore.changeTheme(theme);
  }

  onToggleSidebarStyle() {
    this.coreStore.toggleSidebarStyle();
  }

  onSignOut() {
    this.authService.logout();
  }
}
