import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models/menuItem';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent {

  @Input() menuTitle : string = '';
  @Input() shadow = false;
  @Input() popText = false;
  @Input() items_menu: MenuItem[] = [];


  constructor() {
  }

}
