import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthStoreActions, AuthStoreSelectors } from './../root-store/auth-store';
import { AuthData } from './../root-store/auth-store/state';
import { SettingsStoreActions, SettingsStoreSelectors } from './../root-store/settings-store';
import { AppState } from './../root-store/state';
import { Language, Theme } from '../root-store/settings-store/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  navigation = [
    { path: '/dashboard', icon: 'dashboard', label: 'ng-starter.navigation.dashboard' }
  ];

  languages: { value: Language; name: string; }[] = [
    { value: 'pt-br', name: 'ng-starter.settings.language.pt-br' },
    { value: 'en', name: 'ng-starter.settings.language.en' },
  ];

  themes: { value: Theme; label: string; }[] = [
    { value: 'default-theme', label: 'ng-starter.settings.themes.light' },
    { value: 'dark-theme', label: 'ng-starter.settings.themes.dark' }
  ];

  language$: Observable<string>;
  theme$: Observable<string>;
  authData$: Observable<AuthData | undefined>;

  constructor(private store: Store<AppState>) {
    this.theme$ = this.store.pipe(select(SettingsStoreSelectors.selectTheme));
    this.language$ = this.store.pipe(select(SettingsStoreSelectors.selectLanguage));
    this.authData$ = this.store.pipe(select(AuthStoreSelectors.selectAuthData));
  }

  ngOnInit(): void {
  }

  onLanguageSelect(language: Language) {
    this.store.dispatch(new SettingsStoreActions.ChangeLanguageAction({ language }));
  }

  onThemeSelect(theme: Theme) {
    this.store.dispatch(new SettingsStoreActions.ChangeThemeAction({ theme }));
  }

  onSignOut() {
    this.store.dispatch(new AuthStoreActions.SignOutAction());
  }

}
