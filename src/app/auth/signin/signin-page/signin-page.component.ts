import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Language, Theme } from '../../../modules/root-store/settings-store/models';
import { AuthStoreActions } from './../../../modules/root-store/auth-store';
import { SettingsStoreActions, SettingsStoreSelectors } from './../../../modules/root-store/settings-store';
import { AppState } from './../../../modules/root-store/state';

@Component({
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  form: UntypedFormGroup;
  error?: string;

  languages: { value: Language; label: string; }[] = [
    { value: 'pt-br', label: 'ng-returns.settings.language.pt-br' },
    { value: 'en', label: 'ng-returns.settings.language.en' },
  ];

  themes: { value: Theme; label: string; }[] = [
    { value: 'default-theme', label: 'ng-returns.settings.themes.light' },
    { value: 'dark-theme', label: 'ng-returns.settings.themes.dark' }
  ];

  language$: Observable<string>;
  theme$: Observable<string>;

  constructor(
    private fb: UntypedFormBuilder,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });

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

  submit() {
    if (this.form.valid) {
      const { username, password } = this.form.value as { username: string; password: string };
      this.store.dispatch(new AuthStoreActions.SignInAction({ username, password }));
    }
  }

}
