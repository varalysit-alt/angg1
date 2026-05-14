export interface MenuItem {
    idItem: number;
    itemName: string;
    itemLink: string | null;
    icon: string | null;
    iconTypeId: number | null;
    itemOrder: number | null;
    parentItem: number | null;
    showSubMenu?: boolean | null;
    subMenuItems?: MenuItem[] | null;
  }

