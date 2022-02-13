import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

function getWindow(): any {
  return window;
}
export class WindowServiceService {

  constructor() { }
  consoleLogEnabled = false;

    get nativeWindow(): any {
        return getWindow();
    }
}
