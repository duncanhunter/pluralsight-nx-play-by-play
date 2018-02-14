import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {
  constructor() {}

  login() {
    return of({ id: 1, name: 'larster' });
  }
}
