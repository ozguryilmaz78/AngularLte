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
    name: 'Emlak',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenus: [
      {
        name: 'Emlak Girişi',
        icon: 'fas fa-solid fa-home',
        url: '/property/0',
        isTitle: false,
        subMenus: []
      },
      {
        name: 'Emlak Arama',
        icon: 'fas fa-solid fa-home',
        url: '/property/search',
        isTitle: false,
        subMenus: []
      },
      {
        name: 'Raporlar',
        icon: 'fas fa-solid fa-home',
        url: '/property/report',
        isTitle: false,
        subMenus: []
      },
    ]
  },
  {
    name: 'Müşteri',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenus: [
      {
        name: 'Müşteri Girişi',
        icon: 'fas fa-solid fa-home',
        url: '/customer/0',
        isTitle: false,
        subMenus: []
      },
      {
        name: 'Müşteri Arama',
        icon: 'fas fa-solid fa-home',
        url: '/customer/search',
        isTitle: false,
        subMenus: []
      },
      {
        name: 'Raporlar',
        icon: 'fas fa-solid fa-home',
        url: '/customer/report',
        isTitle: false,
        subMenus: []
      },
    ]
  },
  {
    name: 'Ayarlar',
    icon: 'fas fa-solid fa-home',
    url: '/',
    isTitle: false,
    subMenus: [
      {
        name: 'Kullanıcı İşlemleri',
        icon: 'fas fa-solid fa-user',
        url: '/',
        isTitle: false,
        subMenus: [
          {
            name: 'Şifre Değiştir',
            icon: 'fas fa-solid fa-print',
            url: '/change-password',
            isTitle: false,
            subMenus: []
          },
          {
            name: 'Kullanıcı Bilgileri',
            icon: 'fas fa-solid fa-user',
            url: '/user',
            isTitle: false,
            subMenus: []
          }
        ]
      },
      {
        name: 'Rapor İşlemleri',
        icon: 'fas fa-solid fa-user',
        url: '/',
        isTitle: false,
        subMenus: [
          {
            name: 'Şifre Değiştir22',
            icon: 'fas fa-solid fa-print',
            url: '/change-password',
            isTitle: false,
            subMenus: []
          }
        ]
      },    
    ]
  }
];
