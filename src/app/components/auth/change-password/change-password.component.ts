import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpService } from '../../../services/management/http.service';
import { SwalService } from '../../../services/management/swal.service';
import { ChangePasswordModel } from '../../../models/auth/change-password/change-password.model';
import { SharedModule } from '../../../modules/shared.module';

@Component({
  selector: 'app-change-password',
  imports: [RouterLink,SharedModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.scss'
})
export class ChangePasswordComponent {
  model: ChangePasswordModel = new ChangePasswordModel();
  constructor(
    private http: HttpService, 
    private swal: SwalService) {}

  changePassword() {
    this.http.postIdentity<any>('Auth/ChangePassword', this.model, (res) => {
      this.swal.callToast(
        'Başarılı',
        `Şifreniz güncellendi.`,
        'success'
      );
    });
  }
}
