export type ButtonColors =
  | 'primary'
  | 'secondary'
  | 'dark'
  | 'light'
  | 'success'
  | 'info'
  | 'warning'
  | 'failure';

export type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export const NGTW_BUTTON_HOST = {
  '[attr.disabled]': 'disabled || null',
  'class': 'px-5 py-3 overflow-hidden shadow relative rounded rounded-lg'
};

export const NGTW_ANCHOR_HOST = {
  '[attr.disabled]': 'disabled || null',
  '[attr.tabindex]': 'disabled ? -1 : tabIndex',
  '[attr.aria-disabled]': 'disabled.toString()',
  'class': 'px-5 py-3 overflow-hidden shadow relative rounded rounded-lg'
};

export const NGTW_BUTTON_HOST_SELECTOR_CLASS_MAP: { attribute: string; classes: Record<ButtonColors, string[]> }[] = [
  {
    attribute: 'ngtw-button',
    classes: {
      primary: ['text-white', 'bg-primary-800', 'enabled:hover:bg-primary-700'],
      secondary: ['text-white', 'bg-secondary-800', 'enabled:hover:bg-secondary-700'],
      dark: ['text-white', 'bg-gray-800', 'enabled:hover:bg-gray-700'],
      failure: ['text-white', 'bg-red-800', 'enabled:hover:bg-red-700'],
      info: ['text-white', 'bg-blue-700', 'enabled:hover:bg-blue-600'],
      light: ['text-gray-800', 'bg-white', 'enabled:hover:bg-gray-100'],
      success: ['text-white', 'bg-green-700', 'enabled:hover:bg-green-600'],
      warning: ['text-white', 'bg-yellow-400', 'enabled:hover:bg-yellow-300']
    }
  },
  {
    attribute: 'ngtw-outline-button',
    classes: {
      primary: ['text-primary-800', 'border', 'border-primary-800', 'enabled:hover:text-white', 'enabled:hover:bg-primary-800'],
      secondary: ['text-secondary-800', 'border', 'border-secondary-800', 'enabled:hover:text-white', 'enabled:hover:bg-secondary-800'],
      dark: ['text-gray-800', 'border', 'border-gray-800', 'enabled:hover:text-white', 'enabled:hover:bg-gray-800'],
      failure: ['text-red-700', 'enabled:hover:text-white', 'border', 'border-red-700', 'enabled:hover:bg-red-800'],
      info: ['text-blue-700', 'border', 'border-blue-700', 'enabled:hover:text-white', 'enabled:hover:bg-blue-700'],
      light: ['text-gray-800', 'bg-transparent', 'border', 'border-gray-800', 'enabled:hover:bg-gray-200', 'dark:border-gray-200', 'dark:text-gray-200', 'dark:enabled:hover:text-gray-200'],
      success: ['text-green-700', 'enabled:hover:text-white', 'border', 'border-green-700', 'enabled:hover:bg-green-700'],
      warning: ['text-yellow-400', 'enabled:hover:text-white', 'border', 'border-yellow-400', 'enabled:hover:bg-yellow-400'],
    }
  }
];
