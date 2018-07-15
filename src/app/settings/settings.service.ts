import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { SettingsModel } from './settings.model';

@Injectable()
export class SettingsService {
  settings = new Subject<SettingsModel>();

  setSettings(set: SettingsModel) {
    this.settings.next(set);
  }
}
