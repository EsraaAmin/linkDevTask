import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  status: boolean = false;
  show_menu: boolean = false;
  show_notifications: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  show_menu_event(){
    this.status = !this.status;
    this.show_menu = !this.show_menu;       
}

}
