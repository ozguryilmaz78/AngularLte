import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../../../modules/shared.module';
import { HttpService } from '../../../../services/management/http.service';
import { SwalService } from '../../../../services/management/swal.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModel } from '../../../../models/auth/user/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormHelper } from '../helper/form-helper';
import { defaultUserImage } from '../../../../constants';
import { RoleModel } from '../../../../models/auth/role/role.model';

@Component({
  selector: 'app-update',
  imports: [SharedModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss',
})
export class UpdateComponent implements OnInit {
  form!: FormGroup;
  datas: UserModel = new UserModel();
  roles: RoleModel[] = [];
  id: string = '0';
  isState = 'Yeni Kayıt';
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private swal: SwalService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.initializeForm();
  }

  ngOnInit() {
    this.http.postIdentity<RoleModel[]>('Auth/GetAllRoles', {}, (res) => {
      this.roles = res;
    });
    this.route.url.subscribe(([url]) => {
      if (this.route.snapshot.params['id'] != 0) {
        this.isState = 'Güncelleme';
        this.id = this.route.snapshot.params['id'];
        this.http.postIdentity<UserModel>(
          'Auth/GetById',
          { Id: this.id },
          (res) => {
            this.datas = res;
            this.updateInitializeForm();
          }
        );
      } else {
        this.datas.photoUrl = defaultUserImage;
        this.initializeForm();
      }
    });
  }

  initializeForm() {
    this.form = this.fb.group({
      firstName: ['', FormHelper.required()],
      lastName: ['', FormHelper.required()],
      email: ['', [FormHelper.required(), FormHelper.email()]],
      userName: ['', FormHelper.required()],
      password: ['', FormHelper.required()],
      userRoles: ['', FormHelper.required()],
      photoUrl: [''],
    });
  }

  updateInitializeForm() {
    this.form = this.fb.group({
      firstName: [this.datas.firstName, FormHelper.required()],
      lastName: [this.datas.lastName, FormHelper.required()],
      email: [this.datas.email, [FormHelper.required(), FormHelper.email()]],
      userName: [this.datas.userName, FormHelper.required()],
      userRoles: [this.datas.userRoleId, FormHelper.required()],
      photoUrl: [this.datas.photoUrl],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();

      if (this.id === '0') {
        formData.append('firstName', this.form.get('firstName')?.value);
        formData.append('lastName', this.form.get('lastName')?.value);
        formData.append('userName', this.form.get('userName')?.value);
        formData.append('password', this.form.get('password')?.value);
        formData.append('email', this.form.get('email')?.value);
        formData.append('photoFile', this.selectedFile ? this.selectedFile : "");
        this.http.postIdentity('Auth/Register', formData, (res: any) => {
          this.http.postIdentity(
            'Auth/AssignRole',
            { userId: res.id, roleId: this.form.get('userRoles')?.value },
            (res) => {
              this.swal.callToast(
                'Başarılı',
                'Kullanıcı oluşturuldu.',
                'success'
              );
              this.router.navigateByUrl("user");
            }
          );
        });
      } else {
        formData.append('id', this.id);
        formData.append('firstName', this.form.get('firstName')?.value);
        formData.append('lastName', this.form.get('lastName')?.value);
        formData.append('userName', this.form.get('userName')?.value);
        formData.append('email', this.form.get('email')?.value);
        formData.append('photoFile', this.selectedFile ? this.selectedFile : "");
        this.http.postIdentity('Auth/Update', formData, (res: any) => {
          this.http.postIdentity(
            'Auth/AssignRole',
            { userId: res.id, roleId: this.form.get('userRoles')?.value },
            (res) => {
              this.swal.callToast(
                'Başarılı',
                'Kullanıcı bilgileri güncellendi.',
                'success'
              );
              this.router.navigateByUrl("user");
            }
          );
        });
      }
      
    }
  }

  onCancel() {
    this.router.navigateByUrl('/user');
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
}
