import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../../services/management/http.service';
import { SwalService } from '../../../services/management/swal.service';
import { ForgotPasswordModel } from '../../../models/auth/forgot-password/format-password.model';
import { SharedModule } from '../../../modules/shared.module';

@Component({
  selector: 'app-forgot-password',
  imports: [RouterLink,SharedModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  model: ForgotPasswordModel = new ForgotPasswordModel();
  constructor(private http: HttpService, private swal: SwalService) {}

  forgotPassword() {
    this.http.getIdentity<any>(
      'Auth/ForgotPassword',
      { emailOrUserName: this.model.emailOrUserName },
      (response) => {
        this.swal.callToast(
          'Başarılı',
          `Şifreniz ${response?.email} mail adresinize gönderildi.`,
          'success'
        );
      }
    );
  }
}
