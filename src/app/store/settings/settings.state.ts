import { Language, Theme } from './../../shared/models/settings';

export interface SettingsState {
  language: Language,
  theme: Theme
}

export const initialState: SettingsState = {
  language: 'pt-br',
  theme: 'light-theme'
};
