import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRegister } from '../../../../../../domains/modules/user.model';
import { UserService } from 'src/app/domains/services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, OnChanges {
  @Input() selectedUser: UserRegister | null = null; // при клике на юзера в таблице получаем его
  @Output() userUpdate = new EventEmitter<UserRegister>(); // нужно для отправки обновленных данных пользователя

  editUserForm: FormGroup;
  roles = this.userService.roles;
  isAdmin = false;
  isStudent = false;

  constructor(private fb: FormBuilder, private userService: UserService) {
    this.editUserForm = this.fb.group({
      userLogin: ['', [Validators.required, Validators.minLength(2)]],
      userPassword: ['', [Validators.required]],
      userEnabled: [false],
      userFirstName: ['', [Validators.required]],
      userLastName: ['', [Validators.required]],
      userPatronymic: [''],
      userCreateDate: ['', [Validators.required]],
      userBirthday: ['', [Validators.required]]
    });
    
  }

  ngOnInit() {
    this.updateForm();
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedUser'] && changes['selectedUser'].currentValue) {
      this.updateForm();
    }
  }

  // обновление формы при изменении выбранного юзера
  updateForm() {
    if (this.selectedUser) {
      this.editUserForm.patchValue({
        userLogin: this.selectedUser.userLogin,
        userPassword: this.selectedUser.userPassword,
        userEnabled: this.selectedUser.userEnabled,
        userFirstName: this.selectedUser.userFirstName,
        userLastName: this.selectedUser.userLastName,
        userPatronymic: this.selectedUser.userPatronymic,
        userCreateDate: this.selectedUser.userCreateDate,
        userBirthday: this.formatDate(this.selectedUser.userBirthday)
      });
      this.loadUserRoles();
    }
  }

  loadUserRoles() {
    if (this.selectedUser) {
      this.userService.getUserRoles(this.selectedUser.userId).subscribe(roles => {
        this.isAdmin = roles.includes('admin');
        this.isStudent = roles.includes('student');
      });
    }
  }

  // получение ошибок валидации
  getFieldErrors(field: string) {
    let IdNum = Number(this.selectedUser?.userId)
    let trs = document.querySelectorAll('tr')[IdNum]
    let ps = trs.querySelectorAll('p')


    trs.classList.add('black')
    for (let s = 0; s < ps.length; s++){
      if (s % 2 === 0 && s != 0){
        ps[s].classList.add('sudatuda')
      }
      else{
        if(s != 0){
          ps[s].classList.add('tudasuda')
        }
      }
    }
    return this.editUserForm.get(field)?.errors;
  }

  // отправка обновленных данных юзера
  onSubmit() {
    if (this.editUserForm.valid) {
      const updatedUser = {
        ...this.selectedUser,
        ...this.editUserForm.value
      };
      this.userUpdate.emit(updatedUser);
    }
    setTimeout(() => {
      for (const key in this.roles) {
        document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.remove('empty')
        document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.remove('student')
        document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.remove('admin')
        document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.remove('studentAdmin')
        if (this.roles[key][0] === 'admin' && this.roles[key][1] === 'student'){

          document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.add('studentAdmin')
        }
        else if (this.roles[key][0] === 'admin'){

          document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.add('admin')
        }
        else if (this.roles[key][0] === 'student'){

          document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.add('student')
        }
        else{
          document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.add('empty')
        }
      }
      console.log('kasdjfksjdf')
    }, 1);
  }

  onRoleChange(role: string, event: any) {
    const isChecked = event.target.checked;
    if (role === 'admin') {
      this.isAdmin = isChecked;
    } else if (role === 'student') {
      this.isStudent = isChecked;
    }
  }

  onSubmitRoles() {
    if (this.selectedUser) {
      const roles = [];
      if (this.isAdmin) roles.push('admin');
      if (this.isStudent) roles.push('student');
      this.userService.updateUserRoles(this.selectedUser.userId, roles).subscribe(response => {
        console.log('Roles updated:', response);
        for (const key in this.roles) {
          document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.remove('empty')
          document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.remove('student')
          document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.remove('admin')
          document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.remove('studentAdmin')
          if (this.roles[key][0] === 'admin' && this.roles[key][1] === 'student'){

            document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.add('studentAdmin')
          }
          else if (this.roles[key][0] === 'admin'){

            document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.add('admin')
          }
          else if (this.roles[key][0] === 'student'){

            document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.add('student')
          }
          else{
            document.querySelectorAll('tr')[Number(key)].querySelector('td')?.classList.add('empty')
          }
        }
      }, error => {
        console.error('Error updating roles:', error);
      });
    }
  }

  // обязательное форматирование даты для birthday
  formatDate(date: string | Date | undefined): string {
    if (!date) {
      return '';
    }
    const d = new Date(date);
    return d.toISOString().split('T')[0];
  }
}