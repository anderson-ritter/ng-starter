import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStoreActions, AppStoreSelectors } from 'src/app/root-store';
import { Theme } from 'src/app/shared/models/app';
import { AppState } from './../../root-store/state';
import { ThemeMenuModel } from './models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  themesControl = new FormControl();

  themes: ThemeMenuModel[] = [
    { value: 'default-theme', text: 'Default' },
    { value: 'dark-theme', text: 'Dark' }
  ];

  theme$: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.theme$ = this.store.pipe(select(AppStoreSelectors.selectTheme));
  }

  ngOnInit(): void {
  }

  onThemeSelect(theme: Theme) {
    this.store.dispatch(new AppStoreActions.ChangeThemeAction({ theme }));
  }

}
