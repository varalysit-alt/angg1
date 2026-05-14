import { MenuService } from "../menu/services/menu.service";
import { Component, OnInit } from "@angular/core";
import { MenuItem } from "../menu/models/menu.model";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarMainComponent implements OnInit {
  selectedItem: MenuItem | null = null;
  isSidebarVisible: boolean = false;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService.currentItem$.subscribe(item => {
      this.selectedItem = item;
    });
  }

  // кнопка скрыть/показать
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}