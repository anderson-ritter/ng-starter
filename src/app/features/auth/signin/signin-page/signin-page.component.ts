import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../root-store/state';
import { AuthStoreActions } from './../../../../root-store/auth-store';

@Component({
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  form: FormGroup;
  error?: string;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>
  ) {
    this.form = fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.form.valid) {
      const { username, password } = this.form.value as { username: string; password: string };
      this.store.dispatch(new AuthStoreActions.SignInAction({ username, password }));
    }
  }

}
