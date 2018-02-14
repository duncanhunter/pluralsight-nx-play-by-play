import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { AuthState } from './auth.interfaces';
import * as authActions from './auth.actions';
import { AuthService } from './../services/auth/auth.service';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthEffects {
  @Effect()
  loadData = this.dataPersistence.fetch(authActions.AuthActionTypes.Login, {
    run: (action: authActions.LoginAction, state: AuthState) => {
      return this.authService.login().pipe(
        map(user => {
          return new authActions.LoginSuccessAction(user);
        })
      );
    },

    onError: (action: authActions.LoginAction, error) => {
      console.error('Error', error);
    }
  });

  constructor(
    private authService: AuthService,
    private actions: Actions,
    private dataPersistence: DataPersistence<AuthState>
  ) {}
}
