import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthStore } from 'src/app/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthStore,
    private router: Router
  ) {
    this.form = fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const val = this.form.value;

    this.auth.login(val.email, val.password).subscribe(
      () => {
        this.router.navigateByUrl('/courses');
      },
      (err) => {
        alert('Login failed');
      }
    );
  }
}
