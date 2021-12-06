import { createFeatureSelector, createSelector, MemoizedSelector } from '@ngrx/store';
import { Language, Settings, Theme } from './models';
import { SettingsState } from './state';

export const selectAppState: MemoizedSelector<object, SettingsState> = createFeatureSelector<SettingsState>('settings');

export const selectTheme: MemoizedSelector<object, Theme> = createSelector(
  selectAppState,
  (state: SettingsState): Theme => state.settings?.theme
)

export const selectLanguage: MemoizedSelector<object, Language> = createSelector(
  selectAppState,
  (state: SettingsState): Language => state.settings.language
);

export const selectSettings: MemoizedSelector<object, Settings> = createSelector(
  selectAppState,
  (state: SettingsState): Settings => state.settings
)
