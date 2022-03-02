import { Component } from '@angular/core';
import { Menu } from '../menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  menu: Menu[] = [
    {
      link: '/',
      name: 'Inicial',
      exact: true,
      admin: false
    },
    {
      link: '/area-pessoal',
      name: 'Área Pessoal',
      exact: true,
      admin: false
    },
    {
      link: '/cadastros',
      name: 'Cadastros',
      exact: true,
      admin: false
    },    
    {
      link: '/produtos',
      name: 'Produtos',
      exact: false,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    {
      link: '/contato',
      name: 'Contato',
      exact: true,
      admin: false
    },
  ];
}
