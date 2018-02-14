import { Auth } from './auth.interfaces';
import { AuthAction, AuthActionTypes } from './auth.actions';

export function authReducer(state: Auth, action: AuthAction): Auth {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return { ...state, auth: action.payload };
    }
    default: {
      return state;
    }
  }
}
