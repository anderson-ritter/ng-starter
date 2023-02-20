import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Language, Theme } from '../../../../root-store/settings-store/models';
import { SettingsStoreActions, SettingsStoreSelectors } from '../../../../root-store/settings-store';
import { AppState } from '../../../../root-store/state';

@Component({
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {

  languages: { value: Language; name: string; }[] = [
    { value: 'pt-br', name: 'ng-starter.settings.language.pt-br' },
    { value: 'en', name: 'ng-starter.settings.language.en' },
  ];

  themes: { value: Theme; label: string; class: string; }[] = [
    { value: 'default-theme', label: 'ng-starter.settings.themes.light', class: 'light' },
    { value: 'dark-theme', label: 'ng-starter.settings.themes.dark', class: 'dark' }
  ];

  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.theme$ = this.store.pipe(select(SettingsStoreSelectors.selectTheme));
    this.language$ = this.store.pipe(select(SettingsStoreSelectors.selectLanguage));
  }

  ngOnInit(): void {
  }

  onLanguageSelect(language: Language) {
    this.store.dispatch(new SettingsStoreActions.ChangeLanguageAction({ language }));
  }

  onThemeSelect(theme: Theme) {
    this.store.dispatch(new SettingsStoreActions.ChangeThemeAction({ theme }));
  }

}
