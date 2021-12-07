import { Injectable } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { select, Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { merge, of } from 'rxjs';
import { distinctUntilChanged, filter, tap, withLatestFrom } from 'rxjs/operators';
import { RootStoreState } from '..';
import { LocalStorageService } from './../../shared/services/local-storage.service';
import { TitleService } from './../../shared/services/title.service';
import * as featureActions from './actions';
import * as selectors from './selectors';

const INIT = of('ng-starter-init-effect-trigger');

@Injectable()
export class SettingsStoreEffects {
  constructor(
    private localStorageService: LocalStorageService,
    private translateService: TranslateService,
    private titleService: TitleService,
    private router: Router,
    private store$: Store<RootStoreState.AppState>,
    private actions$: Actions
  ) { }

  updateThemeEffect$ = createEffect(() =>
    merge(INIT, this.actions$.pipe(ofType<featureActions.ChangeThemeAction>(featureActions.ActionTypes.CHANGE_THEME)))
      .pipe(
        withLatestFrom(this.store$.pipe(select(selectors.selectTheme))),
        tap(([action, theme]) => {
          const classList = document.documentElement.classList;
          const toRemove = Array.from(classList).filter((item: string) =>
            item.includes('-theme')
          );
          if (toRemove.length) {
            classList.remove(...toRemove);
          }
          classList.add(theme);
        })
      ),
    { dispatch: false }
  );

  persistSettingsEffect$ = createEffect(() =>
    this.store$.pipe(
      select(selectors.selectSettings),
      distinctUntilChanged(),
      tap(settings => {
        this.localStorageService.setItem('settings.theme', settings.theme);
        this.localStorageService.setItem('settings.language', settings.language);
      })
    ),
    { dispatch: false }
  );

  setLanguageEffect$ = createEffect(() =>
    this.store$.pipe(
      select(selectors.selectLanguage),
      distinctUntilChanged(),
      tap(language => this.translateService.use(language))
    ),
    { dispatch: false }
  );

  setTitleEffect$ = createEffect(() =>
    merge(
      this.actions$.pipe(ofType<featureActions.ChangeLanguageAction>(featureActions.ActionTypes.CHANGE_LANGUAGE)),
      this.router.events.pipe(filter(event => event instanceof ActivationEnd))
    ).pipe(
      tap(() => {
        this.titleService.setTitle(
          this.router.routerState.snapshot.root,
          this.translateService
        );
      })
    ),
    { dispatch: false }
  );
}
