import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { KeycloakProfile } from 'keycloak-js';
import { Subject, takeUntil } from 'rxjs';

import { AuthService } from '../../auth/services';
import { AuthModule } from './../../auth';
import { SharedModule } from './../../shared';
import { Language, Theme } from './../../shared/models/settings';
import { CoreStore } from './../../store/core/core.store';
import { RouterStore } from './../../store/router/router.store';
import { SettingsStore } from './../../store/settings';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    AuthModule,
    SharedModule
  ],
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit, OnDestroy {
  private $unsub = new Subject();

  private readonly authService: AuthService = inject(AuthService);
  private readonly coreStore: CoreStore = inject(CoreStore);
  private readonly settingsStore: SettingsStore = inject(SettingsStore);
  private readonly routerStore: RouterStore = inject(RouterStore);

  private user!: KeycloakProfile;

  readonly navigation = [
    { path: '/dashboard', icon: 'dashboard', label: 'ng-starter.navigation.dashboard' }
  ];

  readonly languages: Map<Language, { label: string }> = new Map([
    ['pt-br', { label: 'ng-starter.settings.language.pt-br' }],
    ['en', { label: 'ng-starter.settings.language.en' }]
  ]);

  readonly themes: Map<Theme, { label: string }> = new Map([
    ['light-theme', { label: 'ng-starter.settings.themes.light' }],
    ['dark-theme', { label: 'ng-starter.settings.themes.dark' }]
  ]);

  readonly sidebar$ = this.coreStore.sidebar$;
  readonly theme$ = this.settingsStore.theme$;
  readonly language$ = this.settingsStore.language$;

  get username() {
    return this.user?.firstName;
  }

  async ngOnInit() {
    this.user = await this.authService.loadUserProfile();

    this.routerStore.routerStateUrl$
      .pipe(
        takeUntil(this.$unsub)
      )
      .subscribe(({ data, queryParams }) => {
        console.log('route data => ', data);
        console.log('route queryParams => ', queryParams);
      });
  }

  ngOnDestroy(): void {
    this.$unsub.next(false);
    this.$unsub.complete();
  }

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
