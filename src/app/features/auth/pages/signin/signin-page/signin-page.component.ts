import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Language, Theme } from './../../../../../shared/models/settings';
import { SharedModule } from './../../../../../shared/shared.module';
import { SettingsStore } from './../../../../../store/settings';

@Component({
  standalone: true,
  imports: [SharedModule],
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  form!: UntypedFormGroup;
  error?: string;

  languages: { value: Language; label: string; }[] = [
    { value: 'pt-br', label: 'ng-starter.settings.language.pt-br' },
    { value: 'en', label: 'ng-starter.settings.language.en' },
  ];

  themes: { value: Theme; label: string; }[] = [
    { value: 'default-theme', label: 'ng-starter.settings.themes.light' },
    { value: 'dark-theme', label: 'ng-starter.settings.themes.dark' }
  ];

  private readonly fb: UntypedFormBuilder = inject(UntypedFormBuilder);
  private readonly settingsStore: SettingsStore = inject(SettingsStore);

  readonly language$ = this.settingsStore.language$;
  readonly theme$ = this.settingsStore.theme$;

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onLanguageSelect(language: Language) {
    this.settingsStore.changeLanguage(language);
  }

  onThemeSelect(theme: Theme) {
    this.settingsStore.changeTheme(theme);
  }

  submit() {
    if (this.form.valid) {
      const { username, password } = this.form.value as { username: string; password: string };
    }
  }

}
