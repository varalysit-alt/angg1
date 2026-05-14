import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from 'src/app/domains/services/admin.service';
import { Admin } from 'src/app/domains/modules/admin.model';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {
  admins: Admin[] = [];
  addAdminForm: FormGroup = new FormGroup({});
  isLoading = false;
  selectedAdmin: Admin | null = null;

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.initAddForm();
    this.loadAdmins();
  }

  initAddForm() {
    this.addAdminForm = new FormGroup({
      admin_login:      new FormControl('', [Validators.required, Validators.minLength(2)]),
      admin_password:   new FormControl('', [Validators.required, Validators.minLength(6)]),
      admin_birth_date: new FormControl('', [Validators.required]),
      is_active_admin:  new FormControl(true)
    });
  }
  initEditForm(admin: Admin) {
    this.addAdminForm = new FormGroup({
      admin_login:      new FormControl(admin.admin_login, [Validators.required, Validators.minLength(2)]),
      admin_password:   new FormControl(''),          // пароль необязателен при редактировании
      admin_birth_date: new FormControl(
        admin.admin_birth_date ? admin.admin_birth_date.slice(0, 10) : ''
      ),
      is_active_admin:  new FormControl(admin.is_active_admin)
    });
  }
  loadAdmins() {
    this.adminService.getAdmins().subscribe(data => {
      this.admins = data;
    });
  }

  selectAdmin(admin: Admin) {
    this.selectedAdmin = admin;
    this.initEditForm(admin);
  }

  cancelEdit() {
    this.selectedAdmin = null;
    this.initAddForm();
  }

  addNewAdmin() {
    if (this.addAdminForm.invalid) {
      this.addAdminForm.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.adminService.createAdmin(this.addAdminForm.value).subscribe({
      next: (res: any) => {
        const newAdmin = res.admin || res;
        this.admins.push(newAdmin);
        this.addAdminForm.reset({ is_active_admin: true });
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
        alert('Ошибка при сохранении');
      }
    });
  }

  saveAdmin() {
    if (this.addAdminForm.invalid || !this.selectedAdmin) {
      this.addAdminForm.markAllAsTouched();
      return;
    }

    const changes: Partial<Admin> = {
      admin_login:      this.addAdminForm.value.admin_login,
      admin_birth_date: this.addAdminForm.value.admin_birth_date || null,
      is_active_admin:  this.addAdminForm.value.is_active_admin,
    };
    const pwd = this.addAdminForm.value.admin_password;
    if (pwd) {
      (changes as any).admin_password = pwd;
    }

    this.isLoading = true;
    this.adminService.updateAdmin(this.selectedAdmin.admin_id, changes).subscribe({
      next: (updated: any) => {
        const idx = this.admins.findIndex(a => a.admin_id === this.selectedAdmin!.admin_id);
        if (idx !== -1) {
          this.admins[idx] = updated.admin || updated;
        }
        this.isLoading = false;
        this.cancelEdit();
      },
      error: () => {
        this.isLoading = false;
        alert('Ошибка при обновлении');
      }
    });
  }

  deleteAdmin(admin: Admin, event: MouseEvent) {
  event.stopPropagation();
  if (!confirm(`Удалить администратора "${admin.admin_login}"?`)) return;

  this.adminService.deleteAdmin(admin.admin_id).subscribe({
    next: () => {
      this.admins = this.admins.filter(a => a.admin_id !== admin.admin_id);
      if (this.selectedAdmin?.admin_id === admin.admin_id) {
        this.cancelEdit();
      }
    },
    error: () => alert('Ошибка при удалении')
  });
}

  getFieldErrors(fieldName: string) {
    const control = this.addAdminForm.get(fieldName);
    return control?.touched && control?.invalid ? control.errors : null;
  }
}