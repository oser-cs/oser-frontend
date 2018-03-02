import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as configData from './config.json';

@Injectable()
export class Config {

  private _config: any = <any>configData;

  get(key: string) {
    return this._config[key];
  }
};
