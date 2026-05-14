import { Component } from '@angular/core';
import { UserRegister } from '../../../../domains/modules/user.model';
import { UserService } from '../../../../domains/services/user.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent {
  // 0 - скрыть | 1 - добавить пользователя | 2 - редактировать пользователя
  asideIndex: number = 1;
  roles = this.userService.roles;
  users: UserRegister[] = this.userService.users;
  selectedUser: UserRegister | null = null; // выбранный юзер (при клике на таблице, для редактирования)

  constructor(private userService: UserService) {}

  onAddUserBtn() {
    this.asideIndex = 1;
    for (let i = 0; i < document.querySelectorAll('tr').length; i++){
      let untrs = document.querySelectorAll('tr')[i]
      let unps = untrs.querySelectorAll('p')
      untrs.classList.remove('black')
      for (let g = 0; g < unps.length; g++){
        if (g % 2 ===0){
          unps[g].classList.remove('sudatuda')
        }
        else{
          unps[g].classList.remove('tudasuda')
        }
      }
    }
  }

  // клик по юзеру в таблице
  onUserSelect(user: any) {
    this.asideIndex = 2;
    this.selectedUser = user;
  }

  // применение отредактированных данных
  updateUser(updatedUser: UserRegister) {
    const index = this.users.findIndex(user => user.userId === updatedUser.userId);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
  }
}