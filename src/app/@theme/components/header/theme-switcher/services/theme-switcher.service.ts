import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ThemeSwitcherService {
  currentTheme = 'light-theme';

  constructor() {
    const darkModeMediaQuery: MediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

const handleColorSchemeChange = (event: MediaQueryListEvent): void => {
    if (event.matches) {

      this.currentTheme = 'dark-theme';
    } else {

      this.currentTheme = 'light-theme';
    }
};

darkModeMediaQuery.addEventListener('change', handleColorSchemeChange);

// Первоначальная проверка
handleColorSchemeChange(new MediaQueryListEvent('change', { matches: darkModeMediaQuery.matches }));}

  setTheme(theme: string) {
    this.currentTheme = theme;
    document.body.className = theme;
  }
  
  
};



