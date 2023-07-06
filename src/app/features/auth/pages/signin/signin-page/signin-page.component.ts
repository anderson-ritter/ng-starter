import { Component, inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { Language, Theme } from './../../../../../shared/models/settings';
import { SharedModule } from './../../../../../shared/shared.module';
import { AuthFacade } from './../../../../../store/auth';
import { SettingsFacade } from './../../../../../store/settings';

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
  private readonly settingsFacade: SettingsFacade = inject(SettingsFacade);
  private readonly authFacade: AuthFacade = inject(AuthFacade);

  readonly language$ = this.settingsFacade.language$;
  readonly theme$ = this.settingsFacade.theme$;

  ngOnInit(): void {
    this.form = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  onLanguageSelect(language: Language) {
    this.settingsFacade.changeLanguage(language);
  }

  onThemeSelect(theme: Theme) {
    this.settingsFacade.changeTheme(theme);
  }

  submit() {
    if (this.form.valid) {
      const { username, password } = this.form.value as { username: string; password: string };
      this.authFacade.signIn(username, password);
    }
  }

}
