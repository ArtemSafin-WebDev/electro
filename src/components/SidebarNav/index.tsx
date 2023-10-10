import NavAccordion from "../NavAccordion";
import navStructure from "./data/menu";
import styles from "./styles.module.scss";

type MenuDevice = {
  id: number;
  title: string;
  href: string;
};

type MenuSector = {
  id: number;
  title: string;
  devices: MenuDevice[];
};

type MenuDepartment = {
  id: number;
  title: string;
  sectors: MenuSector[];
};

type MenuStructure = MenuDepartment[];

export default function SidebarNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {navStructure.map((item) => (
          <li className={styles.listItem} key={item.id}>
            <NavAccordion item={item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export type { MenuDepartment, MenuSector, MenuDevice, MenuStructure };
