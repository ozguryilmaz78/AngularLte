import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SharedModule } from '../../../modules/shared.module';
import { LoginModel } from '../../../models/auth/login/login.model';
import { HttpService } from '../../../services/management/http.service';
import { LoginResponseModel } from '../../../models/auth/login/login.response.model';
import { loginBackgroundImage, programNameBold, programNameRegular } from '../../../constants';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  imports: [RouterLink, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit{
  backgroundImage = `${loginBackgroundImage}`;
  programNameBold = `${programNameBold}`;
  programNameRegular = `${programNameRegular}`;
  model: LoginModel = new LoginModel();
  constructor(private http: HttpService, private router: Router, private titleService: Title) {}
  ngOnInit(): void {
    this.titleService.setTitle(programNameBold+programNameRegular);
  }
  signIn() {
    this.http.postIdentity<LoginResponseModel>('Auth/Login', this.model, (res) => {
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl("/");
    });
  }
}
