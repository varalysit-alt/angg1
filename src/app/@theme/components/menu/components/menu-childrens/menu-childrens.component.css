.submenu {
  width: 100%;
}

.submenu ul {
  width: 100%;
  padding: 0;
  margin: 0;
}

.submenu__item {
  position: relative;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  transition: .3s;
  cursor: pointer;
}

.submenu__item:not(:first-child) {
  border-top: 1px solid var(--block-child-border-color);
}

.submenu__item:hover {
  background-color: var(--block-child-background);
}

.submenu__item:focus-visible {
  outline: none;
  border: 2px solid var(--focus-color);
}

.submenu__wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
}

.submenu__toggle {
  margin-left: auto;
}

.submenu__children {
  display: none;
  flex-direction: column;
  width: 100%;
  padding-top: 10px;
}

.submenu__item--show-children .submenu__children {
  display: flex;
  animation: slideDown 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.675);
}

.submenu__item {
  display: flex;
  align-items: center;
  width: 100%;
}

.submenu__icon {
  display: inline-block;
  min-width: 24px;
  height: 24px;
  margin-right: 10px;
}

.submenu__text {
  flex-grow: 1;
  transition: .3s;
}

.submenu__text--hidden {
  display: none;
}

.submenu__toggle {
  margin-left: auto;
  transition: .3s;
}

.hide-items {
  transform: translateX(-12px);
  opacity: 0;
}

/* открытие */
@keyframes slideDown {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  10% {
    opacity: 0;
    transform: translateY(-30px);
    scale: 1 2;
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}