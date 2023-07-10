import { Component, inject } from '@angular/core';

import { Language, Theme } from './../../shared/models/settings';
import { SharedModule } from './../../shared/shared.module';
import { AuthFacade } from './../../store/auth';
import { CoreFacade } from './../../store/core/core.facade';
import { SettingsFacade } from './../../store/settings';
import { NavigationItem, SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SharedModule,
    SidebarComponent
  ],
  templateUrl: './main.component.html',
  host: { 'class': 'flex justify-start w-screen h-screen bg-gray-300' }
})
export class MainComponent {

  navigation: NavigationItem[] = [
    { path: '/dashboard', icon: 'matDashboardOutline', label: 'ng-starter.navigation.dashboard' },
    { path: '/dashboard2', icon: 'matDashboardOutline', label: 'ng-starter.navigation.dashboard' }
  ];

  languages: { value: Language; name: string; }[] = [
    { value: 'pt-br', name: 'ng-starter.settings.language.pt-br' },
    { value: 'en', name: 'ng-starter.settings.language.en' },
  ];

  themes: { value: Theme; label: string; }[] = [
    { value: 'default-theme', label: 'ng-starter.settings.themes.light' },
    { value: 'dark-theme', label: 'ng-starter.settings.themes.dark' }
  ];

  private readonly authFacade: AuthFacade = inject(AuthFacade);
  private readonly coreFacade: CoreFacade = inject(CoreFacade);
  private readonly settingsFacade: SettingsFacade = inject(SettingsFacade);

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
