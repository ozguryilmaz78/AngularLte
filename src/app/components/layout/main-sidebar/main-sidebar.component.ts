import { Component } from '@angular/core';
import { Menus } from './main-sidebar-menu';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainSidebarMenuPipe } from './main-sidebar-menu.pipe';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-main-sidebar',
  imports: [RouterLink, RouterLinkActive, FormsModule, MainSidebarMenuPipe],
  templateUrl: './main-sidebar.component.html',
  styleUrl: './main-sidebar.component.scss',
})
export class MainSidebarComponent {
  search: string = '';
  menus = Menus;

  constructor(
    public auth:AuthService
  ){}
  
  clearText(){
this.search = "";
  }
}
