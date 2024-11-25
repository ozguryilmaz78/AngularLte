import { Pipe, PipeTransform } from '@angular/core';
import { MainSideBarMenuModel } from './main-sidebar-menu';

@Pipe({
  name: 'mainSidebarMenu'
})
export class MainSidebarMenuPipe implements PipeTransform {

  transform(value: MainSideBarMenuModel[], search:string): MainSideBarMenuModel[] {
    if(search === ""){
    return value;
  }
  return value.filter(p=> 
    p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
    p.subMenus.some(subMenu => 
      subMenu.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  ));
}}
