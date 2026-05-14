import { Component } from '@angular/core';
import { MenuItem } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu-parents',
  templateUrl: './menu-parents.component.html',
  styleUrls: ['./menu-parents.component.css']
})
export class MenuParentsComponent {
  menuParentItems: MenuItem[] = this.menuService.getParentItems();

  constructor(private menuService: MenuService) { }

  onSelectItem(event: Event, item: MenuItem) {
    event.preventDefault();
    this.menuService.setCurrentItem(item);
  }
}
