import { Component, inject } from '@angular/core';

import { Language, Theme } from './../../shared/models/settings';
import { SharedModule } from './../../shared/shared.module';
import { AuthFacade } from './../../store/auth';
import { SettingsFacade } from './../../store/settings';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './main.component.html',
  host: { 'class': 'flex items-center justify-start w-screen h-screen bg-gray-300' }
})
export class MainComponent {

  navigation = [
    { path: '/dashboard', icon: 'matDashboardOutline', label: 'ng-starter.navigation.dashboard' },
    { path: '/settings', icon: 'matSettingsOutline', label: 'ng-starter.navigation.settings' }
  ];

  languages: { value: Language; name: string; }[] = [
    { value: 'pt-br', name: 'ng-starter.settings.language.pt-br' },
    { value: 'en', name: 'ng-starter.settings.language.en' },
  ];

  themes: { value: Theme; label: string; }[] = [
    { value: 'default-theme', label: 'ng-starter.settings.themes.light' },
    { value: 'dark-theme', label: 'ng-starter.settings.themes.dark' }
  ];

  private readonly settingsFacade: SettingsFacade = inject(SettingsFacade);
  private readonly authFacade: AuthFacade = inject(AuthFacade);

  readonly language$ = this.settingsFacade.language$;
  readonly theme$ = this.settingsFacade.theme$;
  readonly user$ = this.authFacade.user$;

  onLanguageSelect(language: Language) {
    this.settingsFacade.changeLanguage(language);
  }

  onThemeSelect(theme: Theme) {
    this.settingsFacade.changeTheme(theme);
  }

  onSignOut() {
    this.authFacade.signOut();
  }
}
