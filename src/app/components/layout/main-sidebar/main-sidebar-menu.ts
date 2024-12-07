export class MainSideBarMenuModel {
  name: string = '';
  icon: string = '';
  url: string = '';
  isTitle: boolean = false;
  subMenus: MainSideBarMenuModel[] = [];
}

export const Menus: MainSideBarMenuModel[] = [
  {
    name: 'Ana Sayfa',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenus: [],
  },
  {
    name: 'Ayarlar',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenus: [
      {
        name: 'Kullanıcı Bilgileri',
        icon: 'fas fa-solid fa-user',
        url: '/user',
        isTitle: false,
        subMenus: []
        }
      ]
    }     
];
