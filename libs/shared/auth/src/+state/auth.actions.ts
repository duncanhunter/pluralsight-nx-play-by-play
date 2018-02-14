import { Action } from "@ngrx/store";

export enum AuthActionTypes {
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFail = '[Auth] LoginFail'
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login
}

export class LoginSuccessAction implements Action {
  readonly type = AuthActionTypes.LoginSuccess
  constructor(public payload: any) { }
}

export class LoginFailAction implements Action {
  readonly type = AuthActionTypes.LoginFail
  constructor(public payload: any) { }
}

export type AuthAction = LoginAction | LoginSuccessAction | LoginFailAction;
