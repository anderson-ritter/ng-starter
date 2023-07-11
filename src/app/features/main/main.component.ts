import { Component, inject } from '@angular/core';

import { Language, Theme } from './../../shared/models/settings';
import { SharedModule } from './../../shared/shared.module';
import { AuthFacade } from './../../store/auth';
import { CoreFacade } from './../../store/core/core.facade';
import { SettingsFacade } from './../../store/settings';
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

  private readonly authFacade: AuthFacade = inject(AuthFacade);
  private readonly coreFacade: CoreFacade = inject(CoreFacade);
  private readonly settingsFacade: SettingsFacade = inject(SettingsFacade);

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

  readonly user$ = this.authFacade.user$;
  readonly sidebar$ = this.coreFacade.sidebar$;
  readonly theme$ = this.settingsFacade.theme$;
  readonly language$ = this.settingsFacade.language$;

  onLanguageSelect(language: Language) {
    this.settingsFacade.changeLanguage(language);
  }

  onThemeSelect(theme: Theme) {
    this.settingsFacade.changeTheme(theme);
  }

  onToggleSidebarStyle() {
    this.coreFacade.toggleSidebarStyle();
  }

  onSignOut() {
    this.authFacade.signOut();
  }
}
