import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() {

  }
  listMenu: MenuItem[] = [];

  ngOnInit(): void {
    this.listMenu = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink: ['/home']

      },
      {
        label: 'Passanger',
        icon: 'pi pi-fw pi-user',
        routerLink: ['/passanger']
        // items: [
        //   {
        //     label: 'Premium'
        //   },
        // ]
      },
      {
        label: 'Article',
        icon: 'pi pi-fw pi-pencil',
        routerLink: ['/article']
      },
      {
        label: 'About',
        icon: 'pi pi-fw pi-info-circle',
        routerLink: ['/about-us']
      },
      {
        label: 'Contact Us',
        icon: 'pi pi-fw pi-phone',
        // routerLink: ['/contact']
      },
    ];
  }

  activeMenu(event:any) {
    //console.log(event.target.classList);
    let node;
    if (event.target.classList.contains("p-submenu-header") == true) {
      node = "submenu";
    } else if (event.target.tagName === "SPAN") {
      node = event.target.parentNode.parentNode;
    } else {
      node = event.target.parentNode;
    }
    //console.log(node);
    if (node != "submenu") {
      let menuitem = document.getElementsByClassName("p-menuitem");
      for (let i = 0; i < menuitem.length; i++) {
        menuitem[i].classList.remove("active");
      }
      node.classList.add("active");
    }
  }

}
