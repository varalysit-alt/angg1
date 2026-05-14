import { Injectable } from '@angular/core';
import { MenuItem } from '../models/menu.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  menuItems: MenuItem[] = [
    {
      idItem: 1,
      itemName: 'Главная',
      itemLink: 'mainPage',
      iconTypeId: 1,
      icon: null,
      itemOrder: 1,
      parentItem: null,
      showSubMenu: false,
      subMenuItems: []
    },

    {
      idItem: 3,
      itemName: 'Мониторинг',
      itemLink: 'NULL',
      iconTypeId: 1,
      icon: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M80-120v-80h800v80H80Zm40-120v-280h120v280H120Zm200 0v-480h120v480H320Zm200 0v-360h120v360H520Zm200 0v-600h120v600H720Z"/></svg>',
      itemOrder: null,
      parentItem: 5,
      showSubMenu: false,
      subMenuItems: []
    },
    {
      idItem: 31,
      itemName: 'Общая',
      itemLink: 'NULL',
      iconTypeId: 1,
      icon: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M42-120v-112q0-33 17-62t47-44q51-26 115-44t141-18q77 0 141 18t115 44q30 15 47 44t17 62v112H42Zm80-80h480v-32q0-11-5.5-20T582-266q-36-18-92.5-36T362-320q-71 0-127.5 18T142-266q-9 5-14.5 14t-5.5 20v32Zm240-240q-66 0-113-47t-47-113h-10q-9 0-14.5-5.5T172-620q0-9 5.5-14.5T192-640h10q0-45 22-81t58-57v38q0 9 5.5 14.5T302-720q9 0 14.5-5.5T322-740v-54q9-3 19-4.5t21-1.5q11 0 21 1.5t19 4.5v54q0 9 5.5 14.5T422-720q9 0 14.5-5.5T442-740v-38q36 21 58 57t22 81h10q9 0 14.5 5.5T552-620q0 9-5.5 14.5T532-600h-10q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T442-600H282q0 33 23.5 56.5T362-520Zm300 160-6-30q-6-2-11.5-4.5T634-402l-28 10-20-36 22-20v-24l-22-20 20-36 28 10q4-4 10-7t12-5l6-30h40l6 30q6 2 12 5t10 7l28-10 20 36-22 20v24l22 20-20 36-28-10q-5 5-10.5 7.5T708-390l-6 30h-40Zm20-70q12 0 21-9t9-21q0-12-9-21t-21-9q-12 0-21 9t-9 21q0 12 9 21t21 9Zm72-130-8-42q-9-3-16.5-7.5T716-620l-42 14-28-48 34-30q-2-5-2-8v-16q0-3 2-8l-34-30 28-48 42 14q6-6 13.5-10.5T746-798l8-42h56l8 42q9 3 16.5 7.5T848-780l42-14 28 48-34 30q2 5 2 8v16q0 3-2 8l34 30-28 48-42-14q-6 6-13.5 10.5T818-602l-8 42h-56Zm28-90q21 0 35.5-14.5T832-700q0-21-14.5-35.5T782-750q-21 0-35.5 14.5T732-700q0 21 14.5 35.5T782-650ZM362-200Z"/></svg>',
      itemOrder: null,
      parentItem: 51,
      showSubMenu: false,
      subMenuItems: []
    },
    {
      idItem: 32,
      itemName: 'По проекту',
      itemLink: 'mainPage/project',
      iconTypeId: 1,
      icon: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z"/></svg>',
      itemOrder: null,
      parentItem: 51,
      showSubMenu: false,
      subMenuItems: []
    },

    {
      idItem: 5,
      itemName: 'Dashboard',
      itemLink: 'dashboard',
      iconTypeId: 1,
      icon: '<svg class="menuIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M120-520v-320h320v320H120Zm0 400v-320h320v320H120Zm400-400v-320h320v320H520Zm0 400v-320h320v320H520ZM200-600h160v-160H200v160Zm400 0h160v-160H600v160Zm0 400h160v-160H600v160Zm-400 0h160v-160H200v160Zm400-400Zm0 240Zm-240 0Zm0-240Z"/></svg>',
      itemOrder: 3,
      parentItem: 1,
      showSubMenu: false,
      subMenuItems: []
    },
    {
      idItem: 33,
      itemName: 'Новости',
      itemLink: 'mainPage/news',
      iconTypeId: 1,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M160-120q-33 0-56.5-23.5T80-200v-640l67 67 66-67 67 67 67-67 66 67 67-67 67 67 66-67 67 67 67-67 66 67 67-67v640q0 33-23.5 56.5T800-120H160Zm0-80h280v-240H160v240Zm360 0h280v-80H520v80Zm0-160h280v-80H520v80ZM160-520h640v-120H160v120Z"/></svg>',
      itemOrder: 3,
      parentItem: 51,
      showSubMenu: false,
      subMenuItems: []
    },

    

    {
      idItem: 51,
      itemName: 'Статистика',
      itemLink: 'dashboard',
      iconTypeId: 1,
      icon: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M120-120v-80l80-80v160h-80Zm160 0v-240l80-80v320h-80Zm160 0v-320l80 81v239h-80Zm160 0v-239l80-80v319h-80Zm160 0v-400l80-80v480h-80ZM120-327v-113l280-280 160 160 280-280v113L560-447 400-607 120-327Z"/></svg>',
      itemOrder: 3,
      parentItem: 1,
      showSubMenu: false,
      subMenuItems: []
    },


    {
      idItem: 7,
      itemName: 'Админ Панель',
      itemLink: 'administration',
      iconTypeId: 2,
      icon: '<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M680-280q25 0 42.5-17.5T740-340q0-25-17.5-42.5T680-400q-25 0-42.5 17.5T620-340q0 25 17.5 42.5T680-280Zm0 120q31 0 57-14.5t42-38.5q-22-13-47-20t-52-7q-27 0-52 7t-47 20q16 24 42 38.5t57 14.5ZM480-80q-139-35-229.5-159.5T160-516v-244l320-120 320 120v227q-19-8-39-14.5t-41-9.5v-147l-240-90-240 90v188q0 47 12.5 94t35 89.5Q310-290 342-254t71 60q11 32 29 61t41 52q-1 0-1.5.5t-1.5.5Zm200 0q-83 0-141.5-58.5T480-280q0-83 58.5-141.5T680-480q83 0 141.5 58.5T880-280q0 83-58.5 141.5T680-80ZM480-494Z"/></svg>',
      itemOrder: 4,
      parentItem: null,
      showSubMenu: false,
      subMenuItems: []
    },
    {
      idItem: 8,
      itemName: 'Пользователи',
      itemLink: 'administration/users',
      iconTypeId: 1,
      icon: '<svg class="menuIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z"/></svg>',
      itemOrder: 1,
      parentItem: 7,
      showSubMenu: false,
      subMenuItems: []
    },

    {
      idItem: 91,
      itemName: 'Роли',
      itemLink: 'administration',
      iconTypeId: 1,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M223.5-423.5Q200-447 200-480t23.5-56.5Q247-560 280-560t56.5 23.5Q360-513 360-480t-23.5 56.5Q313-400 280-400t-56.5-23.5ZM280-240q-100 0-170-70T40-480q0-100 70-170t170-70q67 0 121.5 33t86.5 87h352l120 120-180 180-80-60-80 60-85-60h-47q-32 54-86.5 87T280-240Zm0-80q56 0 98.5-34t56.5-86h125l58 41 82-61 71 55 75-75-40-40H435q-14-52-56.5-86T280-640q-66 0-113 47t-47 113q0 66 47 113t113 47Z"/></svg>',
      itemOrder: 1,
      parentItem: 9,
      showSubMenu: false,
      subMenuItems: []
    },
    
    {
      idItem: 9,
      itemName: 'Админ',
      itemLink: 'NULL',
      iconTypeId: 1,
      icon: '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M381-481q-41-41-41-99t41-99q41-41 99-41t99 41q41 41 41 99t-41 99q-41 41-99 41t-99-41Zm141.5-56.5Q540-555 540-580t-17.5-42.5Q505-640 480-640t-42.5 17.5Q420-605 420-580t17.5 42.5Q455-520 480-520t42.5-17.5ZM480-60 120-280v-400l360-220 360 220v400L480-60Zm0-93 147-91q-34-18-71.5-27t-75.5-9q-38 0-75.5 9T333-244l147 91ZM256-291q50-34 107-51.5T480-360q60 0 117 17.5T704-291l56-33v-311L480-806 200-635v311l56 33Zm224-189Z"/></svg>',
      itemOrder: 1,
      parentItem: 7,
      showSubMenu: false,
      subMenuItems: []
    },

  ];
  private currentItemSubject = new BehaviorSubject<MenuItem>(this.menuItems[0]);
  currentItem$ = this.currentItemSubject.asObservable();

  constructor (){}

  getParentItems(): MenuItem[] {
    return this.menuItems.filter(item => item.parentItem === null);
  }
  
  getChildrenItems(selectedItem: MenuItem): MenuItem[] {
    return this.menuItems.filter(subItem => subItem.parentItem === selectedItem.idItem);
  }
  
  // Обновляем currentItemSubject.
  setCurrentItem(item: MenuItem): void {
    this.currentItemSubject.next(item);
  }
}
