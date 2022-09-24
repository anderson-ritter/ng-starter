import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Language, Theme } from './settings.models';
import { SettingsState } from './state';

export const selectSettings: MemoizedSelector<object, SettingsState> = createFeatureSelector<SettingsState>('settings');

export const selectTheme: MemoizedSelector<object, Theme> = createSelector(
  selectSettings,
  (state: SettingsState): Theme => state?.theme
)

export const selectLanguage: MemoizedSelector<object, Language> = createSelector(
  selectSettings,
  (state: SettingsState): Language => state.language
);
