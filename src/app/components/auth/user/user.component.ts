import { Component, OnInit } from '@angular/core';
import { FlexiGridModule } from 'flexi-grid';
import { SharedModule } from '../../../modules/shared.module';
import { UserModel } from '../../../models/auth/user.model';
import { HttpService } from '../../../services/management/http.service';

@Component({
  selector: 'app-user',
  imports: [SharedModule,FlexiGridModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements OnInit{
datas: UserModel[] = [];
constructor(
  private http:HttpService
){}

ngOnInit(){ 
  this.http.postIdentity<UserModel[]>("Auth/GetAll",{},(res)=>{
    console.log(res);
  })
}
}
