import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';

import { Language, Theme } from './../../shared/models/settings';
import { AppState } from './../../store';
import { SettingsState } from './settings.state';

export const selectSettings: MemoizedSelector<AppState, SettingsState> = createFeatureSelector<SettingsState>('settings');

export const selectTheme: MemoizedSelector<AppState, Theme | undefined> = createSelector(
  selectSettings,
  (state: SettingsState): Theme | undefined => state?.theme
)

export const selectLanguage: MemoizedSelector<AppState, Language> = createSelector(
  selectSettings,
  (state: SettingsState): Language => state.language
);
