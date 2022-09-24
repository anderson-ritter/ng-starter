import { Language, Theme } from './settings.models';

export interface SettingsState {
  language: Language,
  theme: Theme
}

export const initialState: SettingsState = {
  language: 'pt-br',
  theme: 'default-theme'
};
