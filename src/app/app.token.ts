import { InjectionToken } from '@angular/core';
import { config } from './settings/app.settings';

export const APP_SETTINGS = new InjectionToken<any>('app.settings');

export const appSettingsProvider = {
  provide: APP_SETTINGS,
  useValue: config
};
