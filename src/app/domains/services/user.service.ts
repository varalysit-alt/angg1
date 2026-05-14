import { Injectable } from '@angular/core'; 
import { UserRegister } from '../modules/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class UserService {

users: UserRegister[] = [
    {userId: '1', userLogin: 'user1', userPassword: 'root', userEnabled: true, userFirstName: 'Иван', userLastName: 'Иванов', userPatronymic: 'Иванович', userCreateDate: '2024-06-05 12:00:00', userBirthday: '2000-06-09'},
    {userId: '2', userLogin: 'user2', userPassword: 'root', userEnabled: true, userFirstName: 'Иван', userLastName: 'Иванов', userPatronymic: 'Иванович', userCreateDate: '2024-06-05 12:00:00', userBirthday: '2000-06-09'},
    {userId: '3', userLogin: 'user3', userPassword: 'root', userEnabled: true, userFirstName: 'Иван', userLastName: 'Иванов', userPatronymic: 'Иванович', userCreateDate: '2024-06-05 12:00:00', userBirthday: '2000-06-09'}
  ];

  roles: { [key: string]: string[] } = {
    '1': ['admin', 'student'],
    '2': ['student'],
    '3': ['admin']
  };
  
  constructor() {}
  
  getUserRoles(userId: string | number): Observable<string[]> {
    return of(this.roles[userId] || []);
  }
  
  updateUserRoles(userId: string | number, roles: string[]): Observable<any> {
    this.roles[userId] = roles;
    return of({ roles: this.roles });
  }

}