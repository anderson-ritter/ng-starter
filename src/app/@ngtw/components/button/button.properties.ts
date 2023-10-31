export type ButtonColors =
  | 'dark'
  | 'gray'
  | 'light'
  | 'purple'
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
      dark: ['text-white', 'bg-gray-800', 'dark:bg-gray-800', 'enabled:hover:bg-gray-900', 'dark:enabled:hover:bg-gray-700'],
      failure: ['text-white', 'bg-red-700', 'enabled:hover:bg-red-800'],
      gray: ['text-gray-900', 'bg-white', 'enabled:hover:bg-gray-100', 'enabled:hover:text-gray-900'],
      info: ['text-white', 'bg-blue-700', 'enabled:hover:bg-opacity-90'],
      light: ['text-gray-900', 'bg-white', 'enabled:hover:bg-gray-100'],
      purple: ['text-white', 'bg-purple-700', 'enabled:hover:bg-purple-800'],
      success: ['text-white', 'bg-green-700', 'enabled:hover:bg-green-800'],
      warning: ['text-white', 'bg-yellow-400', 'enabled:hover:bg-yellow-500']
    }
  },
  {
    attribute: 'ngtw-outline-button',
    classes: {
      dark: ['text-gray-900', 'enabled:hover:text-white', 'border', 'border-gray-800', 'enabled:hover:bg-gray-900', 'dark:border-gray-600', 'dark:text-gray-400', 'dark:hover:text-white'],
      failure: ['text-red-700', 'enabled:hover:text-white', 'border', 'border-red-700', 'enabled:hover:bg-red-800'],
      gray: ['text-gray-900', 'bg-transparent', 'border', 'border-gray-200', 'enabled:hover:bg-gray-100', 'enabled:hover:text-blue-700'],
      info: ['text-blue-700', 'enabled:hover:text-white', 'border', 'border-blue-700', 'enabled:hover:bg-blue-800'],
      light: ['text-gray-900', 'bg-transparent', 'border', 'border-gray-200', 'enabled:hover:bg-white'],
      purple: ['text-purple-700', 'enabled:hover:text-white', 'border', 'border-purple-700', 'enabled:hover:bg-purple-800'],
      success: ['text-green-700', 'enabled:hover:text-white', 'border', 'border-green-700', 'enabled:hover:bg-green-800'],
      warning: ['text-yellow-400', 'enabled:hover:text-white', 'border', 'border-yellow-400', 'enabled:hover:bg-yellow-500'],
    }
  }
];
