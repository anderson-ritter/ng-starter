import { Layout } from './../../shared/models/core';

export interface CoreState {
  error?: string;
  layout: Layout;
}

export const initialState: CoreState = {
  layout: {
    sidebar: {
      collapsed: false
    }
  }
};
