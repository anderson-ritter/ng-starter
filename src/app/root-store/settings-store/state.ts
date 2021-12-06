import { Language, Theme } from '../../shared/models/settings';

export interface SettingsState {
  language: Language,
  theme: Theme
}

export const initialState: SettingsState = {
  theme: 'default-theme',
  language: 'pt-br'
};
