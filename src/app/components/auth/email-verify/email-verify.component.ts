import { Component, OnInit } from '@angular/core';
import { emailVerifyImage, loginBackgroundImage, programNameBold, programNameRegular } from '../../../constants';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../../services/management/http.service';
import { SwalService } from '../../../services/management/swal.service';

@Component({
  selector: 'app-email-verify',
  imports: [],
  templateUrl: './email-verify.component.html',
  styleUrl: './email-verify.component.scss'
})
export class EmailVerifyComponent implements OnInit{
  backgroundImage = `${loginBackgroundImage}`;
  emailverifyImage = `${emailVerifyImage}`;
  programNameBold = `${programNameBold}`;
  programNameRegular = `${programNameRegular}`;

  constructor(private http: HttpService, 
    private router: Router,
    private route: ActivatedRoute,
    private swal: SwalService
  ) {}
  ngOnInit(): void {
    let token = this.route.snapshot.params['token'];
    if (token != 0)
    {
      this.http.getIdentity<any>('Auth/EmailVerify?token='+token,{}, (res) => {
      this.swal.callToast('Başarılı',res.message,'success');
    });
  }
  }
  redirectLogin() {
      this.router.navigateByUrl("login");

  }
}
