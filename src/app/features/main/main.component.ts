import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStoreActions, AppStoreSelectors } from './../../root-store';
import { AppState } from './../../root-store/state';
import { Language, Theme } from './../../shared/models/app';

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

  constructor(private store: Store<AppState>) {
    this.theme$ = this.store.pipe(select(AppStoreSelectors.selectTheme));
    this.language$ = this.store.pipe(select(AppStoreSelectors.selectLanguage));
  }

  ngOnInit(): void {
  }

  onLanguageSelect(language: Language) {
    this.store.dispatch(new AppStoreActions.ChangeLanguageAction({ language }));
  }

  onThemeSelect(theme: Theme) {
    this.store.dispatch(new AppStoreActions.ChangeThemeAction({ theme }));
  }

}
