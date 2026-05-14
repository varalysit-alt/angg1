import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { MenuItem } from '../../models/menu.model';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-menu-childrens',
  templateUrl: './menu-childrens.component.html',
  styleUrls: ['./menu-childrens.component.css']
})
export class MenuChildrensComponent implements OnInit {
  @Input() sidebarHidden: boolean = true;
  @Input() parentItem: MenuItem | null = null;
  menuChildrenItems: MenuItem[] | null = null;

  constructor(public menuService: MenuService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.parentItem) { // если получили parentItem через @Input() (нужно для вложенности)
      this.menuChildrenItems = this.menuService.getChildrenItems(this.parentItem);
    } else {
        // нужно, чтобы перерисовывать элементы в сайд баре.
      this.menuService.currentItem$.subscribe(currentItem => {
        if (currentItem) {
          this.menuChildrenItems = this.menuService.getChildrenItems(currentItem);
        }
      });
    }
  }

  toggleSubMenu(item: MenuItem) {
    item.showSubMenu = !item.showSubMenu;

    // заполняет ключ (массив) subMenuItems у объекта
    if (item.showSubMenu) {
      item.subMenuItems = this.menuService.getChildrenItems(item);
    } else {
      item.subMenuItems = null;
    }
  }

  // корректирует вставку иконки
  getSafeHtml(icon: string | null): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(icon || '');
  }
}