import { Component, OnInit } from '@angular/core';
import { ThemeSwitcherService } from './services/theme-switcher.service';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.css']
})
export class ThemeSwitcherComponent implements OnInit {
  currentTheme: string = this.themeService.currentTheme || 'light-theme';
  prevTheme : string = '';
  constructor(private themeService: ThemeSwitcherService) {

    const darkModeMediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const handleColorSchemeChange = (event: MediaQueryListEvent): void => {
    if (event.matches) {

      this.themeService.setTheme('dark-theme');
    } else {

      this.themeService.setTheme('light-theme');
    }
};

darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);

// Первоначальная проверка
handleColorSchemeChange(new MediaQueryListEvent('change', { matches: darkModeMediaQuery.matches }));
  }

  ngOnInit() {
    this.themeService.setTheme(this.currentTheme);
  }

  toggleTheme() {
    document.querySelectorAll('.theme-switcher__button')[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF7C00"><path d="M480-120q-117 0-198.5-81.5T200-400q0-94 55.5-168.5T401-669q-20-5-39-14.5T328-708q-33-33-42.5-78.5T281-879q47-5 92.5 4.5T452-832q23 23 33.5 52t13.5 61q13-31 31.5-58.5T572-828q11-11 28-11t28 11q11 11 11 28t-11 28q-22 22-39 48.5T564-667q88 28 142 101.5T760-400q0 117-81.5 198.5T480-120Zm0-80q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-200Z"/></svg>`
    this.currentTheme = this.currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
    this.themeService.setTheme(this.currentTheme);

    if (this.currentTheme === 'dark-theme'){
      document.querySelectorAll('.theme-switcher__button')[1]!.innerHTML = `
      <ng-template #darkTheme>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="currentColor"
        >
          <path
            d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"
          />
        </svg>
      </ng-template>`
    }
    else{
      document.querySelectorAll('.theme-switcher__button')[1]!.innerHTML =
      `      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 -960 960 960"
        width="24px"
        fill="currentColor"
      >
        <path
          d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80Zm0-720q-44 0-81.5 15.5T332-742l-58-56q41-38 93.5-60T480-880q125 0 212.5 87.5T780-580q0 71-25 121.5T698-376l-56-56q21-23 39.5-59t18.5-89q0-92-64-156t-156-64Zm368 688-57 57-265-265H330q-69-41-109.5-110T180-580q0-20 2.5-39t7.5-37L56-792l56-56 736 736ZM354-400h92L260-586v6q0 54 24.5 101t69.5 79Zm-6-98Zm134-94Zm164 312v80H320v-80h326Z"
        />
      </svg>
      `
    }
  }

  rizhiTheme(){

    if (this.currentTheme != 'rizhi-theme'){
      this.prevTheme = this.currentTheme
      this.currentTheme = 'rizhi-theme'
      this.themeService.setTheme(this.currentTheme)
      
      if (this.prevTheme === 'light-theme'){
        document.querySelectorAll('.theme-switcher__button')[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#EBEBEB"><path d="M480-120q-117 0-198.5-81.5T200-400q0-94 55.5-168.5T401-669q-20-5-39-14.5T328-708q-33-33-42.5-78.5T281-879q47-5 92.5 4.5T452-832q23 23 33.5 52t13.5 61q13-31 31.5-58.5T572-828q11-11 28-11t28 11q11 11 11 28t-11 28q-22 22-39 48.5T564-667q88 28 142 101.5T760-400q0 117-81.5 198.5T480-120Zm0-80q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-200Z"/></svg>`
      }
      else {
        document.querySelectorAll('.theme-switcher__button')[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#0D1017"><path d="M480-120q-117 0-198.5-81.5T200-400q0-94 55.5-168.5T401-669q-20-5-39-14.5T328-708q-33-33-42.5-78.5T281-879q47-5 92.5 4.5T452-832q23 23 33.5 52t13.5 61q13-31 31.5-58.5T572-828q11-11 28-11t28 11q11 11 11 28t-11 28q-22 22-39 48.5T564-667q88 28 142 101.5T760-400q0 117-81.5 198.5T480-120Zm0-80q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-200Z"/></svg>`
      }
    }
    else{
      document.querySelectorAll('.theme-switcher__button')[0].innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FF7C00"><path d="M480-120q-117 0-198.5-81.5T200-400q0-94 55.5-168.5T401-669q-20-5-39-14.5T328-708q-33-33-42.5-78.5T281-879q47-5 92.5 4.5T452-832q23 23 33.5 52t13.5 61q13-31 31.5-58.5T572-828q11-11 28-11t28 11q11 11 11 28t-11 28q-22 22-39 48.5T564-667q88 28 142 101.5T760-400q0 117-81.5 198.5T480-120Zm0-80q83 0 141.5-58.5T680-400q0-83-58.5-141.5T480-600q-83 0-141.5 58.5T280-400q0 83 58.5 141.5T480-200Zm0-200Z"/></svg>`
      document.body.className = this.prevTheme;
      this.currentTheme = this.prevTheme
      this.prevTheme = 'rizhi-theme'
      
    }

  }
}
