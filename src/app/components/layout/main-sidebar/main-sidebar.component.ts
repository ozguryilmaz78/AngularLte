import { Component, OnInit } from '@angular/core';
import { Menus } from './main-sidebar-menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainSidebarMenuPipe } from './main-sidebar-menu.pipe';
import { AuthService } from '../../../services/auth/auth.service';
import { loginBackgroundImage, programLogoImage, programNameBold, programNameRegular } from '../../../constants';
import { HttpService } from '../../../services/management/http.service';
import { UserModel } from '../../../models/auth/user/user.model';
import { SharedModule } from '../../../modules/shared.module';

@Component({
  selector: 'app-main-sidebar',
  imports: [RouterLink, RouterLinkActive, FormsModule, MainSidebarMenuPipe,SharedModule],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.scss',
})
export class MainSidebarComponent implements OnInit{
  backgroundImage = `${loginBackgroundImage}`;
  programLogoImage = `${programLogoImage}`;
  programNameBold = `${programNameBold}`;
  programNameRegular = `${programNameRegular}`;
  search: string = '';
  menus = Menus;
  user : UserModel = new UserModel();

  constructor(
    public auth:AuthService,
    private http:HttpService
  ){}
  ngOnInit(): void {
    this.http.postIdentity<UserModel>("Auth/GetById",{id:this.auth.user.id},(res)=>{
      this.user = res;
    });
  }
  
  clearText(){
this.search = "";
  }
}
