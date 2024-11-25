import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

constructor(
  private router: Router
){}

signOut(){
  localStorage.clear();
  this.router.navigateByUrl("/login");
}

changePassword(){
  this.router.navigateByUrl("/change-password");
}

}
