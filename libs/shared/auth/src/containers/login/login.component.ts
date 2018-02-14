import { Component, OnInit } from '@angular/core';
import { AuthState } from './../../+state/auth.interfaces';
import * as authActions from './../../+state/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {}

  login() {
    this.store.dispatch(new authActions.LoginAction());
  }
}
