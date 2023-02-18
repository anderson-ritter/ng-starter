import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Language, Theme } from '../modules/root-store/settings-store/models';
import { AuthStoreActions, AuthStoreSelectors } from './../modules/root-store/auth-store';
import { AuthData } from './../modules/root-store/auth-store/state';
import { SettingsStoreActions, SettingsStoreSelectors } from './../modules/root-store/settings-store';
import { AppState } from './../modules/root-store/state';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  navigation = [
    { path: '/dashboard', icon: 'dashboard', label: 'ng-returns.navigation.dashboard' }
  ];

  languages: { value: Language; name: string; }[] = [
    { value: 'pt-br', name: 'ng-returns.settings.language.pt-br' },
    { value: 'en', name: 'ng-returns.settings.language.en' },
  ];

  themes: { value: Theme; label: string; }[] = [
    { value: 'default-theme', label: 'ng-returns.settings.themes.light' },
    { value: 'dark-theme', label: 'ng-returns.settings.themes.dark' }
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
