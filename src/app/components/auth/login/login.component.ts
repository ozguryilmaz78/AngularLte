import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedModule } from '../../../modules/shared.module';
import { LoginModel } from '../../../models/auth/login/login.model';
import { HttpService } from '../../../services/management/http.service';
import { LoginResponseModel } from '../../../models/auth/login/login.response.model';
import { loginBackgroundImage } from '../../../constants';

@Component({
  selector: 'app-login',
  imports: [RouterLink, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  backgroundImage = `${loginBackgroundImage}`;
  model: LoginModel = new LoginModel();
  constructor(private http: HttpService, private router: Router) {}
  signIn() {
    this.http.postIdentity<LoginResponseModel>('Auth/Login', this.model, (res) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl("/");
    });
  }
}
