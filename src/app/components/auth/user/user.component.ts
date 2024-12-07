import { Component, OnInit } from '@angular/core';
import { FlexiGridModule, FlexiGridService, StateModel} from 'flexi-grid';
import { SharedModule } from '../../../modules/shared.module';
import { UserModel } from '../../../models/auth/user/user.model';
import { HttpService } from '../../../services/management/http.service';
import { SwalService } from '../../../services/management/swal.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [SharedModule, FlexiGridModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  datas: UserModel[] = [];
  filterDatas: any[] = [];
  loading: boolean = false;
  state:StateModel=new StateModel();
  constructor(
    private http: HttpService,
    private swal: SwalService,
    private router: Router
  ) {}

  ngOnInit() {
   this.getValues();
  }

  getValues(){
    this.loading = true;
    this.filterDatas = [];
    this.http.postIdentity<any>('Auth/GetAllRoles', {}, (res) => {
    for(let r of res)
    {
      this.filterDatas.push({value: r.description, name: r.description})
    }
    });
    this.http.postIdentity<UserModel[]>('Auth/GetAll', this.state, (res) => {
    this.datas = res;
    this.loading = false;
    });
  }

  remove(id: any) {
    this.swal.callSwal(
      'Emin misiniz?',
      'Bu kaydı silmek istiyor musunuz?',
      () => {
        this.http.postIdentity('Auth/Delete', { id }, (res) => {
          this.datas = this.datas.filter((item) => item.id !== id);
          this.swal.callToast('Başarılı', 'Kayıt silindi.', 'success');
        });
      }
    );
  }

  update(id: any) {
    this.router.navigateByUrl(`user/update/${ id }`);
  }

  add() {
    this.router.navigateByUrl(`user/update/0`);
  }

  dataStateChange(event:any){
    this.state= event;
    this.getValues();
  }  



}

  

