export interface UserRegister {
    userId: string | number;
    userLogin: string;
    userPassword: string;
    userEnabled: boolean;
    userFirstName: string;
    userLastName: string;
    userPatronymic: string;
    userCreateDate?: string | Date;
    userBirthday?: string | Date;
    isAdmin?: boolean;
    isStudent?: boolean;
  }